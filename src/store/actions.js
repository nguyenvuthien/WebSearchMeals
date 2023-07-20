import axiosClient from '../axiosClient.js';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            if (data && data.meals) {
                commit('setSearchMeals', data.meals);
            } else {
                // Xử lý trường hợp không có dữ liệu trả về hoặc không có thuộc tính `meals`
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            if (data && data.meals) {
                commit('setMealsByLetter', data.meals);
            } else {
                // Xử lý trường hợp không có dữ liệu trả về hoặc không có thuộc tính `meals`
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
        .then(({ data }) => {
            if (data && data.meals) {
                commit('setMealsByIngredient', data.meals);
            } else {
                // Xử lý trường hợp không có dữ liệu trả về hoặc không có thuộc tính `meals`
            }
        })
        .catch((error) => {
            console.error(error);
        });
}