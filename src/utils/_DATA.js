let phones = {
    Techno: {
        brand: "Techno",
        inCart: 'false',
        url: 'https://static.turbosquid.com/Preview/2019/07/20__03_04_13/SmartphoneOrangeGeneric3dmodel000.jpg6530D3E8-8B45-4074-99C7-826213F5A3A3Large.jpg'
    },
    Apple: {
        brand: "Iphone",
        inCart: "false",
        url: 'https://static.turbosquid.com/Preview/2020/01/23__10_08_30/BlackSmartphone3dmodel000.jpg4B0C974A-5040-4593-850C-CA421BD3BE1FLarge.jpg'
    },
    Samsung: {
        brand: "Samsung",
        inCart: "false",
        url: 'https://static.turbosquid.com/Preview/2020/01/23__10_08_30/BlackSmartphone3dmodel000.jpg4B0C974A-5040-4593-850C-CA421BD3BE1FLarge.jpg'
    },
    Hauwei: {
        brand: "Huawei",
        inCart: "false",
        url: 'https://static.turbosquid.com/Preview/2019/07/20__03_04_13/SmartphoneOrangeGeneric3dmodel000.jpg6530D3E8-8B45-4074-99C7-826213F5A3A3Large.jpg'
    },
    HTC: {
        brand: "HTC",
        inCart: "false",
        url: 'https://static.turbosquid.com/Preview/2020/01/23__10_08_30/BlackSmartphone3dmodel000.jpg4B0C974A-5040-4593-850C-CA421BD3BE1FLarge.jpg'
    }
}

export function _getPhones() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...phones }), 1000);
    });
}

export function setInCart({ id, inCart, url }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            phones = {
                ...phones,
                [id]: {
                    ...phones[id],
                    inCart: inCart,
                    url: url
                }
            }
            res()
        }, 500);
    });
}