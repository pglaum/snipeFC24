type IStorage = {
    general: {
        loop_interval: number,
        select_card: number,
    },
    listitem: {
        bidprice: number,
        buynowprice: number,
    },
    autosniping: {
        wait1: number,
        wait2: number,
        bidlow: number,
        bidhigh: number,
        enabled: boolean,
        max_cards: number,
        autoAction: number,
    }
}

export const defaultStorage: IStorage = {
    general: {
        loop_interval: 10,
        select_card: 0,
    },
    listitem: {
        bidprice: 500,
        buynowprice: 10000,
    },
    autosniping: {
        wait1: 500,
        wait2: 1000,
        bidlow: 150,
        bidhigh: 850,
        enabled: false,
        max_cards: 10,
        autoAction: 0,
    },
}

export const storage = {
    get: (): Promise<IStorage> => chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
    set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};
