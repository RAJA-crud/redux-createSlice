import { PeraWalletConnect } from "@perawallet/connect";

const PeraWallet = () => {
    const peraWallet = new PeraWalletConnect()

    async function handleConnectWalletClick() {
        const newAccounts = await peraWallet.connect();
        console.log(newAccounts[0]);
    }

    return (
        <div>
            <button onClick={handleConnectWalletClick}>Connect</button>
        </div>
    )
}
export default PeraWallet