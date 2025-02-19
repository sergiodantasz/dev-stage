import bronzeMedal from "@/assets/bronze-medal.svg"
import goldMedal from "@/assets/gold-medal.svg"
import silverMedal from "@/assets/silver-medal.svg"
import Image from "next/image"

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative rounded-lg-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Sérgio Dantas
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1.128
          </span>
          <Image
            src={goldMedal}
            alt="Gold medal icon."
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-lg-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Jorge Ricardo
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            865
          </span>
          <Image
            src={silverMedal}
            alt="Silver medal icon."
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-lg-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Bruno Fernando
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            712
          </span>
          <Image
            src={bronzeMedal}
            alt="Bronze medal icon."
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
