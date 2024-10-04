'use client'

import ManagerHeader from '@/features/manager/components/ManagerHeader/index.tsx'
import { useUserRole } from '@/hooks/queries/user.ts'

export default function ManagerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data, isSuccess } = useUserRole()

  if (!isSuccess) {
    return (
      <div className="flex flex-col h-screen">
        {/* 헤더 */}
        <ManagerHeader />
        <div className="grow flex justify-center items-center">
          <p className="text-2xl font-bold">로딩중...</p>
        </div>
      </div>
    )
  }
  if (data?.memberType !== 'MANAGER') {
    return (
      <div className="flex flex-col h-screen">
        {/* 헤더 */}
        <ManagerHeader />
        <div className="grow flex justify-center items-center">
          <p className="text-2xl font-bold">접근권한이 없습니다.</p>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col h-screen">
      {/* 헤더 */}
      <ManagerHeader />
      <div className="grow">{children}</div>
    </div>
  )
}
