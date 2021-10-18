import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByQuery } from "../../../../redux/actions/posts.action";
import { ElementsList } from "../../../../components/homeComponents/elements.list";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsByQuery(keyword));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <div style={{ paddingTop: "2rem" }}>
      {Array.isArray(state?.posts) ? <ElementsList list={state?.posts} /> : ""}
    </div>
  );
};

export default Index;
