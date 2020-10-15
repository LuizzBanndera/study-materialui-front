
export async function Sleep(time: number) {
  return await new Promise(resolve => setTimeout(resolve, time))
}