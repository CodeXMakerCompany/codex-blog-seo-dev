import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByCategory } from "../../../redux/actions/posts.action";
import { ElementsList } from '../../../components/homeComponents/elements.list';
import { useRouter } from 'next/router';

import EmptyContentLoader from '../../../components/global/emptyContent.global';
import { SEOHelmet } from '../../../components/global/helmet'
const Index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const state = useSelector(state => state.posts);
    
    const { name } = router.query;

    useEffect(() => {
        dispatch(fetchPostsByCategory(name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    const seoCategory = {
        description:
          "Blog de desarrollo web, hecho para desarrolladores por desarrolladores, aquí encontraras tips, tutoriales, cursos y buenas prácticas, nuestro objetivo es ayudarte a encontrar mejores oportunidad y llevar tus habilidades al siguiente nivel 🚀",
        title: "Codexmakers-" + name,
        og_type: "article",
        image:
          "https://res.cloudinary.com/codexmaker/image/upload/v1599944110/g3inmd9zbiejksrriwz0.jpg",
        url: "localhost",
        og_site_name: "blog.codexmakers.com"+router.asPath,
        tw_card: "summary",
      };

    return (
        <div style={{ paddingTop: "2rem" }}>
            <SEOHelmet props={seoCategory} />
           {state?.posts?.length ? (
              <ElementsList list={state?.posts} />
            ) : <EmptyContentLoader />}
        </div>
    )
}

export default Index;

