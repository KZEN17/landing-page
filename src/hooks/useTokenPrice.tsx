import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/lib/api/fetcher";

const CACHE_TIME = 1000 * 60 * 5; // 5 minutes

const fetchEthPrice = async (date: string | null) => {
  const url = date ? `${BASE_URL}/crypto/eth-spot-price?date=${date}` : `${BASE_URL}/crypto/eth-spot-price`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error status: ${response.statusText}`);
  }

  return response.json();
};

export const useTokenPrice = (date: string | null = null) => {
  const {
    data: ethPrice,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["ethPrice", date],
    queryFn: () => fetchEthPrice(date),
    staleTime: CACHE_TIME,
    refetchOnWindowFocus: true,
  });

  return { ethPrice, error, isLoading };
};
