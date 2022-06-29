import { Transaction, TransactionSigner } from "algosdk";
import { IWallet, Networks, PopupPermissionCallback, SignedTxn, Wallets } from "../_types";
export declare class DynamicWallet {
    private _network;
    private _walletChoice;
    wallet: IWallet;
    private readonly popupPermissionCallback?;
    constructor(network: Networks, walletChoice?: Wallets, popupPermissionCallback?: PopupPermissionCallback);
    get walletChoice(): Wallets;
    set walletChoice(newChoice: Wallets);
    set network(newChoice: Networks);
    get network(): Networks;
    connect(): Promise<boolean>;
    connected(): boolean;
    getSigner(): TransactionSigner;
    setStoredAccountList(accts: string[]): void;
    storedAccountList(): string[];
    setStoredAccountPreference(idx: number): void;
    storedAccountPreference(): number;
    setStoredWalletChoice(walletChoice: Wallets): void;
    storedWalletChoice(): Wallets;
    setStoredNetworkPreference(networkChoice?: Networks): void;
    storedNetworkPreference(): Networks;
    flushLocalStorage(): void;
    disconnect(): void;
    getDefaultAccount(): string;
    signTxn(txns: Transaction[]): Promise<SignedTxn[]>;
}
