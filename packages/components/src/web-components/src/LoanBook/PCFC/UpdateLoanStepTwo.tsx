import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	PrimaryInput,
	UnderlineButton,
	PrimaryButton,
	FixingFrequencyDropDown,
	Header,
	showDeleteConfirmationModal,
} from "components";
import { useBetaForm } from "@locoworks/reusejs-toolkit-react-hooks";
import {
	createPcfc,
	deletePcfc,
	updatePcfc,
	useModalNavigation,
} from "services";
import { useDispatch } from "react-redux";
import {
	refreshPcfc,
	setPcfcList,
	setPortfolioModal,
	setToastMessage,
} from "store";
import { IIcon } from "icons";
import { useSelector } from "react-redux";
import { clearPcfcForm, setPcfcFormWithPayload } from "store";
import { useParams } from "react-router";
import { updatePcfcSpecificRecord } from "store";
export interface DataRowProps {
	type: "fixed" | "floating";
	label: string;
	selected: "fixed" | "floating" | null;
	setSelected: Function;
}

const DataRow = ({ type, label, selected, setSelected }: DataRowProps) => {
	return (
		<div className="flex items-center py-2 justify-start gap-x-2 my-[6px]">
			<input
				type="checkbox"
				checked={type === selected}
				className="form-checkbox h-6 w-6 rounded-full border-[3px] border-semiLightGray focus:ring-transparent checked:focus:bg-black checked:border-black checked:bg-black"
				onChange={() => {
					if (type === selected) {
						setSelected(null);
					} else {
						setSelected(type);
					}
				}}
			/>
			<label className="text-mine-shaft-4 text-sm font-inter font-normal leading-[22px]">
				{label}
			</label>
		</div>
	);
};

const UpdateLoanStepTwo = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(false);
	const { closeModalScreen, fullNavigation, switchModalScreen } =
		useModalNavigation();
	const { pcfcId }: any = useParams();
	const formStorePayload = useSelector((state: any) => {
		return state?.pcfcListSlice.pcfcList[pcfcId];
	});
	const currency_type =
		formStorePayload.fixed_rates == "" ? "fixed" : "floating";
	const [selected, setSelected] = useState(
		currency_type as "fixed" | "floating" | null,
	);
	const [disabled, setDisabled] = useState(true);

	const storePayload = useSelector((state: any) => {
		return state.pcfcFormSlice;
	});
	let currentStorePaylod = { ...formStorePayload };

	currentStorePaylod = {
		...currentStorePaylod,
	};
	const {
		fixed_rates,
		fixing_frequency,
		spread,
		bank_name,
		loan_number,
		order_number,
	} = currentStorePaylod;

	const form = useBetaForm({
		fixed_rates,
		fixing_frequency,
		spread,
		bank_name,
		loan_number,
		order_number,
	});

	const handleSave = async () => {
		const payload = form.value;
		dispatch(setPcfcFormWithPayload(payload));
		const currentPayload = { uuid: pcfcId, ...storePayload, ...payload };
		const response: any = await updatePcfc(currentPayload);
		if (response.success) {
			dispatch(
				setToastMessage({
					message: `Loan Updated!`,
					type: "neutral",
				}),
			);
		}
		switchModalScreen(`pcfc/${pcfcId}`);
		dispatch(clearPcfcForm());
		dispatch(updatePcfcSpecificRecord(response.pcfc[0]));
		dispatch(refreshPcfc());
	};

	useEffect(() => {
		if (form.getField("fixed_rates") || form.getField("spread")) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [form]);

	const deleteCallBackFunction = async () => {
		try {
			setLoading(true);
			await deletePcfc([pcfcId]);
			dispatch(
				setToastMessage({
					message: `Pcfc Deleted!`,
					type: "neutral",
				}),
			);
			dispatch(setPortfolioModal({ displayModalScreen: false }));
			dispatch(refreshPcfc());
			navigate(`/fx-home/loan-book/pcfc/${pcfcId}`);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	const handleDeletePcfc = async () => {
		const result = await showDeleteConfirmationModal({
			title: "Delete Pcfc?",
			description: "All the details of this Pcfc will be removed permanently.",
			callbackYes: deleteCallBackFunction,
			makeModalFull: false,
			web: true,
		});
	};
	return (
		<>
			<div className="relative gap-x-4 pt-4 bg-white flex flex-col h-full overflow-y-hidden">
				<Header
					className="flex items-center justify-between px-4 py-[7px] bg-white z-30"
					displayTitle="Add PCFC/PSFC loan"
					showEditIcon={false}
					showPlainText={true}
					showDelete={true}
					SuffixPlaintext="Step 2 / 2"
					backAction={() => {
						switchModalScreen("add-loan");
					}}
					deleteAction={() => {
						handleDeletePcfc();
					}}
				/>

				<div className="border border-b border-1 border-mine-shaft-2" />
				<div className="flex flex-col mx-5 mt-4 gap-y-4 pb-[70px] flex-1 overflow-y-scroll ">
					<div className={"border rounded-2xl"}>
						<div className="p-4">
							<span className="text-xl font-inter font-bold text-sm">
								Rate of interest
							</span>

							<div>
								<div className="flex justify-between items-center">
									<DataRow
										type="fixed"
										label={"Fixed"}
										selected={selected}
										setSelected={setSelected}
									/>

									{selected === "fixed" && (
										<div className=" w-1/2 py-1">
											<PrimaryInput
												onChange={(e: any) => {
													const value = e.target.value;
												}}
												classNames="leading-[22px] "
												form={form}
												field={"fixed_rates"}
												fieldType={"number"}
												inputMode="decimal"
												placeholder={{
													main: "e.g. 10%",
												}}
												onBlur={(e, setInFocus) => {
													setInFocus(true);
												}}
												value={form.value.fixed_rates}
												numberOnly
											/>
										</div>
									)}
								</div>
								<div className="border-b border-dotted w-full border-mine-shaft-2 my-1" />
								<DataRow
									type="floating"
									label="Floating"
									selected={selected}
									setSelected={setSelected}
								/>
								{selected === "floating" && (
									<div className="flex flex-row items-center py-1">
										<FixingFrequencyDropDown
											form={form}
											defaultSelected={[]}
											wrapperClasses="w-2/3 mr-2"
										/>
										<PrimaryInput
											onChange={(e) => {}}
											value={form.value.spread}
											prefix={"Bps"}
											form={form}
											field={"spread"}
											fieldType={"number"}
											inputMode="decimal"
											placeholder={{
												main: "Spread (Bps)",
											}}
											wrapperClasses="w-1/3"
										/>
									</div>
								)}
							</div>
						</div>
					</div>
					<PrimaryInput
						onChange={(e: any) => {
							const value = e.target.value;
						}}
						classNames="leading-[22px] "
						form={form}
						field={"bank_name"}
						placeholder={{
							main: "Bank Name (Optional)",
						}}
						onBlur={(e, setInFocus) => {
							setInFocus(true);
						}}
						value={form.value.bank_name}
						wrapperClasses="mt-2"
					/>
					<PrimaryInput
						onChange={(e: any) => {
							const value = e.target.value;
						}}
						classNames="leading-[22px] "
						form={form}
						field={"loan_number"}
						placeholder={{
							main: "Loan number(Optional)",
						}}
						onBlur={(e, setInFocus) => {
							setInFocus(true);
						}}
						value={form.value.loan_number}
						wrapperClasses="mt-2"
					/>
					<PrimaryInput
						onChange={(e: any) => {
							const value = e.target.value;
						}}
						classNames="leading-[22px] "
						form={form}
						field={"order_number"}
						placeholder={{
							main: "Order Numbers(Optional)",
						}}
						onBlur={(e, setInFocus) => {
							setInFocus(true);
						}}
						value={form.value.order_number}
						wrapperClasses="mt-2"
					/>
					<div className="flex text-sm font-inter mb-3 text-mine-shaft-3 gap-x-2">
						<span onClick={() => {}} className="cursor-pointer">
							<IIcon svgStyles="scale-[70%]" color="#717171" />
						</span>
						<div>
							Additional amount of receivables expected in the current month.
							This will help us evaluate cash usage vs. Hedge pickup better.
						</div>
					</div>
				</div>

				<div
					className={`shadow-boxShadow h-fit py-3 px-4 flex bg-white shadow-style-chooser gap-x-5 items-center justify-center w-full m-auto `}
				>
					<>
						<UnderlineButton
							onClick={() => {
								closeModalScreen();
							}}
							buttonText="Back"
						/>
						<PrimaryButton
							className="disabled:hover:bg-semiLightGray"
							disabled={disabled}
							onClick={() => {
								handleSave();
							}}
							buttonText={"Save"}
						/>
					</>
				</div>
			</div>
		</>
	);
};
export default UpdateLoanStepTwo;