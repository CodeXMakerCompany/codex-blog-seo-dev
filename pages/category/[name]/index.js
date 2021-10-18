import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByCategory } from "../../../redux/reducers/postsReducer";
import { ElementsList } from '../../../components/homeComponents/elements.list';

const Index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const state = useSelector(state => state.posts);
    
    const { name } = router.query;

    useEffect(() => {
        dispatch(fetchPostsByCategory(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return (
        <div>
           {Array.isArray(state?.posts) ? (
              <ElementsList list={state?.posts} />
            ) : ""}
        </div>
    )
}

export default Index;

