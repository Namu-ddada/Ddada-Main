import { privateAPI } from '@/api/axios.ts'
import { ManagerPk } from '@/features/manager/types/ManagerType.ts'
import {
  FetchManagerMatchListType,
  ManagerMatchListPayload,
  MatchStatusType,
} from '@/features/manager/types/MatchDataType.ts'

export async function addJudgeToMatch(matchId: number) {
  await privateAPI.patch(`manager/matches/${matchId}`)
}

export async function deleteJudgeToMatch(matchId: number) {
  await privateAPI.delete(`manager/matches/${matchId}`)
}

export async function fetchManagerPk(): Promise<ManagerPk | null> {
  const accessToken = sessionStorage.getItem('accessToken')
  if (!accessToken) return null
  const res = await privateAPI.get('/manager/id')
  return res.data.result
}

export async function fetchManagerMatchList(
  params: ManagerMatchListPayload,
): Promise<FetchManagerMatchListType> {
  const res = await privateAPI.get('/manager/matches', { params })
  return res.data.result
}

export async function changeMatchStatus(
  matchId: number,
  status: MatchStatusType,
) {
  const payload = {
    status,
  }
  await privateAPI.patch(`/manager/matches/${matchId}/status`, payload)
}
export async function storeMatchResult(matchId: number, payload: any) {
  await privateAPI.put(`/manager/matches/${matchId}`, payload)
}
