import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { authStore } from '../global/auth.global';

const useFetch = (target, payload) => {
  let Query;
  const { otp, secret_ID } = authStore();

  switch (target) {
    // ======= Admin login -->
    // ======= {secret_ID} -->
    case 'ADMIN-LOGIN':
      return (Query = useQuery(
        'ADMIN LOGIN',
        async () =>
          await axios.post(
            'https://nnpc-caim-server.herokuapp.com/admin/login',
            { secret_ID }
          ),
        { enabled: false }
      ));

    // ======= Admin otp confirm -->
    // ======= {secret_ID, otp} -->
    case 'ADMIN-CONFIRM':
      return (Query = useQuery(
        'ADMIN LOGIN',
        async () =>
          await axios.post(
            'https://nnpc-caim-server.herokuapp.com/admin/login/confirm',
            { secret_ID, otp }
          ),
        { enabled: false }
      ));

    default:
      break;
  }
  return Query;
};

export default useFetch;
