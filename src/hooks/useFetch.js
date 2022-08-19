import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { authStore } from '../global/auth.global';

const useFetch = (target, payload) => {
  let Query;
  const { otp, secret_ID, token } = authStore();

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

    // ======= Get current Admin -->
    // ======= jwt token -->
    case 'GET-CURRENT-USER':
      return (Query = useQuery(
        'GET CURRENT USER',
        async () =>
          await axios.get(
            'https://nnpc-caim-server.herokuapp.com/admin/get/single',
            {
              headers: {
                authorization: `BEARER ${token}`,
              },
            }
          )
      ));

    // ======= Get all staff -->
    // ======= jwt token -->
    case 'GET-STAFF':
      return (Query = useQuery(
        'GET ALL STAFF',
        async () =>
          await axios.get('https://nnpc-caim-server.herokuapp.com/staff', {
            headers: {
              authorization: `BEARER ${token}`,
            },
          }),
        { staleTime: 10000, refetchInterval: 10000 }
      ));

    // ======= Add new staff -->
    // ======= jwt token staffData -->
    case 'ADD-STAFF':
      return (Query = useQuery(
        'ADD NEW STAFF',
        async () =>
          await axios.post('http://localhost:8080/staff', payload, {
            headers: {
              authorization: `BEARER ${token}`,
            },
          }),
        {
          enabled: false,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
        }
      ));

    // ======= Delete staff -->
    // ======= jwt token staff id to delete -->
    case 'DELETE-STAFF':
      return (Query = useQuery(
        'DELETE SINGLE STAFF',
        async () =>
          await axios.delete(`http://localhost:8080/staff/${payload}`, {
            headers: {
              authorization: `BEARER ${token}`,
            },
          }),
        {
          enabled: false,
          staleTime: Infinity,
        }
      ));

    default:
      break;
  }
  return Query;
};

export default useFetch;
