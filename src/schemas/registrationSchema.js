import z from "zod"

const registrationSchema = z.object({
    name: z.string().nonempty("Firma navn skal udfyldes"),
    email: z.email("Du skal skrive en gyldig email"),
    address: z.string().nonempty("Adresse navn skal udfyldes"),
    phone: z.coerce.string("Dit telefonnummer må kun indholde tal")
        .refine(n => n.length === 8, "Dit telefonnummer må kun have 8 cifre"),
    options: z.enum(["børnesponsorat", "lejrsponsorat", "støtte til foreningen"], "Du skal vælge en af muglighederne"),
    amount: z.coerce.string()
})

export default registrationSchema