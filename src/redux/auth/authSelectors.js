const getUserName = state => state.auth.user.name;

const isLoading = state => state.auth.loading;

export default {
    getUserName,
    isLoading,
};
