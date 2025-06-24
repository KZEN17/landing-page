import { chainId } from "@/components/layout/wagmi-config";
import { useWallets } from "@privy-io/react-auth";
import { useEffect, useMemo } from "react";
import { useSwitchChain } from "wagmi";

export function usePrivyWallet() {
  const { wallets } = useWallets();
  const sw = useSwitchChain();

  const privyWallet = useMemo(() => {
    let privyOnly = wallets.find((wallet) => wallet.walletClientType === "privy");
    if (!privyOnly) {
      privyOnly = wallets.find((wallet) => wallet.linked);
    }

    sw.switchChain({ chainId: chainId() });

    return privyOnly;
  }, [wallets]);

  useEffect(() => {}, [privyWallet, wallets]);

  return privyWallet;
}
