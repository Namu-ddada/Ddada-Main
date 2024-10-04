'use client'

import GameUserInfo from '@/features/manager/components/GameUserInfo/index.tsx'
import { useMatchDetailContext } from '@/features/reservationDetail/providers/index.tsx'
import BronzeIcon from '@/static/imgs/manager/BronzeIcon.svg'

export default function MatchPlayerInfo() {
  const matchDetailData = useMatchDetailContext()
  const team1Data = matchDetailData?.team1
  const team2Data = matchDetailData?.team2

  return (
    <div className="p-2 flex flex-col gap-y-3 bg-white text-xs">
      <div className="flex ">
        <h2 className="text-xl font-bold border-b-2 border-theme box-border">
          선수 정보
        </h2>
      </div>
      <div className="bg-primary px-2 py-1 flex justify-center">
        <p className="text-white">
          현재 매치의 평균 티어는 <span className="font-bold">세미프로</span>
          에요
        </p>
      </div>

      {/* 선수목록 */}
      <div className="flex justify-between items-center">
        {/* A팀 */}
        <div className="flex flex-col gap-y-6">
          {/* player A1 */}
          <div className="flex gap-x-3">
            <GameUserInfo src={team1Data.player1.image} />
            <div className="flex flex-col gap-y-1 grow">
              <p className="flex gap-x-1 items-center">
                <span className="font-bold text-disabled-dark">
                  [A1] {team1Data.player1.nickname}
                </span>
              </p>
              <p className="flex gap-x-1 items-center">
                <BronzeIcon />
                <span>아마추어</span>
              </p>
            </div>
          </div>
          {/* player A2 */}
          {team1Data.player2 ? (
            <div className="flex gap-x-3">
              <GameUserInfo src={team1Data.player2.image} />
              <div className="flex flex-col gap-y-1 grow">
                <p className="flex gap-x-1 items-center text-disabled-dark">
                  <span className="font-bold">
                    [A2] {team1Data.player2.nickname}
                  </span>
                </p>
                <p className="flex gap-x-1 items-center">
                  <BronzeIcon />
                  <span>아마추어</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-disabled-dark font-bold text-center">
              매칭중...
            </p>
          )}
        </div>

        {/* B팀 */}
        <div className="flex flex-col gap-y-6">
          {/* player B1 */}
          {team2Data.player1 ? (
            <div className="flex gap-x-3">
              <div className="flex flex-col gap-y-1 items-end grow">
                <p className="flex gap-x-1 items-center text-disabled-dark">
                  <span className="font-bold">
                    [A2] {team2Data.player1.nickname}
                  </span>
                </p>
                <p className="flex gap-x-1 items-center">
                  <BronzeIcon />
                  <span>아마추어</span>
                </p>
              </div>
              <GameUserInfo src={team2Data.player1.image} />
            </div>
          ) : (
            <p className="text-sm text-disabled-dark font-bold text-center">
              매칭중...
            </p>
          )}
          {/* player B2 */}
          {team2Data.player2 ? (
            <div className="flex gap-x-3">
              <div className="flex flex-col gap-y-1 items-end grow">
                <p className="flex gap-x-1 items-center text-disabled-dark">
                  <span className="font-bold">
                    [A2] {team2Data.player2.nickname}
                  </span>
                </p>
                <p className="flex gap-x-1 items-center">
                  <BronzeIcon />
                  <span>아마추어</span>
                </p>
              </div>
              <GameUserInfo src={team2Data.player2.image} />
            </div>
          ) : (
            <p className="text-sm text-disabled-dark font-bold text-center">
              매칭중...
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
