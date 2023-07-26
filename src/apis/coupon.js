import axios from '~/ultils/axios';

export const apiGetCoupon = (couponCode) =>
    axios({
        method: 'POST',
        url: '/coupon/getcoupon',
        data: { couponCode },
    });
