import bronzeMedal from "@/assets/bronze-medal.svg"
import goldMedal from "@/assets/gold-medal.svg"
import silverMedal from "@/assets/silver-medal.svg"
import { getRanking } from "@/http/api"
import Image from "next/image"

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className="relative rounded-lg-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{" "}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
              {rankingPosition === 1 ? (
                <Image
                  src={goldMedal}
                  alt="Gold medal icon."
                  className="absolute top-0 right-8"
                />
              ) : rankingPosition === 2 ? (
                <Image
                  src={silverMedal}
                  alt="Silver medal icon."
                  className="absolute top-0 right-8"
                />
              ) : rankingPosition === 3 ? (
                <Image
                  src={bronzeMedal}
                  alt="Bronze medal icon."
                  className="absolute top-0 right-8"
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
