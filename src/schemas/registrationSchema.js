import z from "zod"

const registrationSchema = z.object({
    name: z.string().nonempty("Firma navn skal udfyldes"),
    email: z.email("Du skal skrive en gyldig email"),
    address: z.string().nonempty("Adresse skal udfyldes"),
    phone: z.coerce.string("Dit telefonnummer må kun indholde tal")
        .refine(n => n.length === 8, "Dit telefonnummer må kun have 8 cifre"),
    options: z.enum(["børnesponsorat", "lejrsponsorat", "støtte til foreningen"], "Du skal vælge en af muglighederne"),
    amount: z.coerce.string()
}).superRefine((data, ctx) => {
    if(data.options === "børnesponsorat" && data.amount < 4000){
        ctx.addIssue({
            path: ["amount"],
            code: z.ZodIssueCode.custom,
            message: "Minimum for børnesponsorat er 4000 kr"
        })
    }
    if(data.options === "lejrsponsorat" && data.amount < 2000){
        ctx.addIssue({
            path: ["amount"],
            code: z.ZodIssueCode.custom,
            message: "Minimum for lejrsponsorat er 2000 kr"
        })
    }
    if(data.options === "støtte til foreningen" && data.amount < 1000){
        ctx.addIssue({
            path: ["amount"],
            code: z.ZodIssueCode.custom,
            message: "Minimum for støtte til foreningen er 1000 kr"
        })
    }
})

export default registrationSchema