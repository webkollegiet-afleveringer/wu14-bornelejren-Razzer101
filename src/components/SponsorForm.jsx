import z from "zod"
import registrationSchema from "../schemas/registrationSchema"
import { useState } from "react"

export default function SponsorForm(){
    const [nameError, setNameError] = useState({})
    const [emailError, setEmailError] = useState({})
    const [addressError, setAddressError] = useState({})
    const [phoneError, setPhoneError] = useState({})
    const [optionsError, setOptionsError] = useState({})
    const [amountError, setAmountError] = useState({})

    const onChangeHandler = (event) => {
        const inputName = event.target.name
        const result = registrationSchema.safeParse({[inputName]: `${event.target.value}`})
        if(inputName === "name"){
            if(result.success){
                setNameError({})
            } else {
                const readableErrors = z.treeifyError(result.error)
                setNameError(readableErrors.properties)
            }
        } else if(inputName === "email"){
            if(result.success){
                setEmailError({})
            } else {
                const readableErrors = z.treeifyError(result.error)
                setEmailError(readableErrors.properties)
            }
        } else if(inputName === "address"){
            if(result.success){
                setAddressError({})
            } else {
                const readableErrors = z.treeifyError(result.error)
                setAddressError(readableErrors.properties)
            }
        } else if(inputName === "phone"){
            if(result.success){
                setPhoneError({})
            } else {
                const readableErrors = z.treeifyError(result.error)
                setPhoneError(readableErrors.properties)
            }
        } else if(inputName === "options"){
            if(result.success){
                setOptionsError({})
            } else {
                const readableErrors = z.treeifyError(result.error)
                setOptionsError(readableErrors.properties)
            }
        } else if(inputName === "amount"){
            if(result.success){
                setAmountError({})
            } else {
                const readableErrors = z.treeifyError(result.error)
                setAmountError(readableErrors.properties)
            }
        }
    }

    const submithandler = (event) => {
        event.preventDefault()

        const form = event.target
        const formdata = new FormData(form)
        const formDataObject = Object.fromEntries(formdata.entries())

        const result = registrationSchema.safeParse(formDataObject)

        if(result.success){
            alert(
                `Tak for din registrering`
            )
            form.reset()
        } else {
            const readableErrors = z.treeifyError(result.error)
            setNameError(readableErrors.properties)
            setEmailError(readableErrors.properties)
            setAddressError(readableErrors.properties)
            setPhoneError(readableErrors.properties)
            setOptionsError(readableErrors.properties)
            setAmountError(readableErrors.properties)
        }
    }

    return(
        <form onSubmit={submithandler} className="px-4 py-3 mx-4 sm:mx-20 mb-5 border-2 border-main rounded-sm">
            <fieldset className="flex flex-col mb-3">
                <legend className="text-2xl text-center font-semibold mb-3">Registrering</legend>
                <label htmlFor="name" className="mb-3 flex flex-col">
                    <span className="text-xl">Firmanavn:</span>
                    <input onChange={() => onChangeHandler(event)} id="name" name="name" type="text" className="border-2 border-main rounded-sm text-xl w-full"/>
                    <ul>
                        {
                            nameError.name?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="email" className="mb-3 flex flex-col">
                    <span className="text-xl">Email:</span>
                    <input onChange={() => onChangeHandler(event)} id="email" name="email" type="email" className="border-2 border-main rounded-sm text-xl w-full"/>
                    <ul>
                        {
                            emailError.email?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="address" className="mb-3 flex flex-col">
                    <span className="text-xl">Firma adresse:</span>
                    <input onChange={() => onChangeHandler(event)} id="address" name="address" type="text" className="border-2 border-main rounded-sm text-xl w-full"/>
                    <ul>
                        {
                            addressError.address?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="phone" className="mb-3 flex flex-col">
                    <span className="text-xl">Telefon:</span>
                    <input onChange={() => onChangeHandler(event)} id="phone" name="phone" type="tel" className="border-2 border-main rounded-sm text-xl w-full"/>
                    <ul>
                        {
                            phoneError.phone?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="options" className="mb-3 flex flex-col">
                    <span className="text-xl">Støttemuligheder:</span>
                    <select onChange={() => onChangeHandler(event)} id="options" name="options" className="border-2 border-main rounded-sm text-xl w-full">
                        <option value="">Vælg en af muglighederne</option>
                        <option value="børnesponsorat">Børnesponsorat</option>
                        <option value="lejrsponsorat">Lejrsponsorat</option>
                        <option value="støtte til foreningen">Støtte til foreningen</option>
                    </select>
                    <ul>
                        {
                            optionsError.options?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
                <label htmlFor="amount" className="flex flex-col">
                    <span className="text-xl">Beløb:</span>
                    <input onChange={() => onChangeHandler(event)} id="amount" name="amount" type="number" className="border-2 border-main rounded-sm text-xl w-full"/>
                    <ul>
                        {
                            amountError.amount?.errors.map(
                                (message, index) => <li key={index}>{message}</li>
                            )
                        }
                    </ul>
                </label>
            </fieldset>
            <button type="submit" className="w-full text-white bg-main rounded-sm py-2 text-xl font-bold hover:bg-red-500">Registrer</button>
        </form>
    )
}