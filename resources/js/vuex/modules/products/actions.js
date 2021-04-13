import axios from "axios";
import { URL_BASE } from '../../../configs/configs'

const CONFIGS = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

export default {
    loadProducts (context, params) {
        context.commit('PRELOADER', true)
        axios.get(`${URL_BASE}products`, {params})
            .then(response => {
                console.log(response)
                context.commit('LOAD_PRODUCTS', response.data)
            })
            .catch(errors => {
                console.log(errors)
            })
            .finally(() => context.commit('PRELOADER', false))
    },

    loadProduct (context, id) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            axios.get(`${URL_BASE}products/${id}`)
                .then(response => {
                    console.log(response.data)
                    resolve(response.data)
                })
                .catch(errors => reject(errors))
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    storeProduct (context, formData) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}products`, formData, CONFIGS)
                .then(response => resolve())
                .catch(error => {
                    console.log(error.response)
                    reject(error)
                })
                //.finally(() => context.commit('PRELOADER', false))
        })
    },

    updateProduct (context, formData) {
        context.commit('PRELOADER', true)
        formData.append('_method', 'PUT')
        return new Promise((resolve, reject) => {
            console.log('formData')
            console.log(formData)
            alert('aki')
            axios.post(`${URL_BASE}products/${formData.get('id')}`, formData)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)
                    console.log(error.response)
                    reject(error.response)
                })
        })
    },

    destroyProduct (context, id) {
        context.commit('PRELOADER', true)
        return new Promise((resolve, reject) => {
            axios.delete(`${URL_BASE}products/${id}`)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)
                    reject(error)
                })
        })
    }
}
