import React from 'react';
import Loadable from 'react-loadable';

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (
    loader,
    loading = () => {
        return <div>loading1</div>;
    }
    ) => {
    return Loadable({
        loader, // 需要懒加载的组件
        loading,
    });
};
