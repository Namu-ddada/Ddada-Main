'use client'

// import { useQuery } from '@tanstack/react-query'

// import { fetchGymInfo } from '@/features/gym/api/GymAPI.ts'
import GymInfo from '@/features/gym/components/GymInfo/index.tsx'
import GymReservedList from '@/features/gym/components/GymReservedList/index.tsx'
import GymChart from '@/features/gym/components/GymChart/index.tsx'
import GymIncome from '@/features/gym/components/GymIncome/index.tsx'
import Callcenter from '@/features/gym/components/CallCenter/index.tsx'
import { GymProvider } from '@/features/gym/providers/index.tsx'

export default function GymDashboardPage() {
  // const { data: gymInfo, isSuccess: isGymInfoSuccess } = useQuery({
  //   queryKey: ['gyminfo'],
  //   queryFn: fetchGymInfo,
  // })

  // if (!isGymInfoSuccess) {
  //   return (
  //     <div>
  //       <p>loading</p>
  //     </div>
  //   )
  // }

  return (
    <GymProvider gymInfo={null}>
      <div className="flex flex-col bg-base-50">
        {/* 메인 이름 */}
        <GymInfo />
        <div className="flex gap-x-6 p-6">
          {/* Main */}
          <div className="flex flex-col gap-y-6 grow">
            <GymReservedList />
            <GymChart />
          </div>

          {/* sidebar */}
          <div className="flex flex-col gap-y-6">
            <GymIncome />
            <Callcenter />
          </div>
        </div>
      </div>
    </GymProvider>
  )
}
