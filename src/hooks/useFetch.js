import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { authStore } from '../global/auth.global';

const useFetch = (target, payload) => {
  let Query;
  const { otp, secret_ID, token } = authStore();

  switch (target) {
    //=============================================> # ADMIN
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

    //=============================================>  # STAFF
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

    // ======= Get staff by id-->
    // ======= jwt token, staff id -->
    case 'GET-STAFF-BY-ID':
      return (Query = useQuery(
        'GET SINGLE STAFF',
        async () =>
          await axios.get(
            `https://nnpc-caim-server.herokuapp.com/staff/${payload}`,
            {
              headers: {
                authorization: `BEARER ${token}`,
              },
            }
          ),
        { staleTime: 10000, refetchInterval: 10000 }
      ));

    // ======= Add new staff -->
    // ======= jwt token ,staffData -->
    case 'ADD-STAFF':
      return (Query = useQuery(
        'ADD NEW STAFF',
        async () =>
          await axios.post(
            'https://nnpc-caim-server.herokuapp.com/staff',
            payload,
            {
              headers: {
                authorization: `BEARER ${token}`,
              },
            }
          ),
        {
          enabled: false,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
        }
      ));

    // ======= Delete staff -->
    // ======= jwt token, staff id to delete -->
    case 'DELETE-STAFF':
      return (Query = useQuery(
        'DELETE SINGLE STAFF',
        async () =>
          await axios.delete(
            `https://nnpc-caim-server.herokuapp.com/staff/${payload}`,
            {
              headers: {
                authorization: `BEARER ${token}`,
              },
            }
          ),
        { enabled: false, staleTime: Infinity }
      ));

    //=============================================>  # CLAIMS
    /* ====== Get all claims */
    /* ====== jwt token  */
    case 'GET-CLAIMS':
      return (Query = useQuery(
        'GET ALL CLAIMS',
        async () =>
          await axios.get(`https://nnpc-caim-server.herokuapp.com/claims/`, {
            headers: {
              authorization: `BEARER ${token}`,
            },
          }),
        { staleTime: 10000, refetchInterval: 10000 }
      ));

    /* ====== Create new claim */
    /* ====== jwt token, claim data */
    case 'CREATE-CLAIM':
      return (Query = useQuery(
        'CREATE NEW CLAIM',
        async () =>
          await axios.post(
            `https://nnpc-caim-server.herokuapp.com/claims/`,
            payload,
            {
              headers: {
                authorization: `BEARER ${token}`,
              },
            }
          ),
        { enabled: false, staleTime: Infinity }
      ));

    // ======= Delete claim -->
    // ======= jwt token, claim id to delete -->
    case 'DELETE-CLAIM':
      return (Query = useQuery(
        'DELETE SINGLE CLAIM',
        async () =>
          await axios.delete(
            `https://nnpc-caim-server.herokuapp.com/claims/${payload}`,
            {
              headers: {
                authorization: `BEARER ${token}`,
              },
            }
          ),
        { enabled: false, staleTime: Infinity }
      ));

    default:
      break;
  }
  return Query;
};

export default useFetch;
