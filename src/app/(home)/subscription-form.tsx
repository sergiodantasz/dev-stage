import { Button } from "@/components/button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { ArrowRight, Mail, User } from "lucide-react"

export function SubscriptionForm() {
  return (
    <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User className="size-5" />
          </InputIcon>
          <InputField
            type="text"
            placeholder="Nome completo"
          />
        </InputRoot>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>
          <InputField
            type="email"
            placeholder="E-mail"
          />
        </InputRoot>
        <Button type="submit">
          Confirmar
          <ArrowRight />
        </Button>
      </div>
    </form>
  )
}
