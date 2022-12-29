import {Box, useMediaQuery,Typography } from "@mui/material"
import { useSelector } from "react-redux";
import Navbar from "../navbar"
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";

import UserWidget from "../widgets/UserWidget";

const HomePage =()=>{

 const{_id,picturePath}=useSelector((state)=>state.user);
     const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
console.log(_id);
console.log(picturePath);

     return (
      <Box>
        <Navbar />
        <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="0.5rem"
          justifyContent="space-between"
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
           <MyPostWidget picturePath={picturePath}/> 
           <PostsWidget userId={_id} />
          </Box>

          {isNonMobileScreens && <Box flexBasis="26%"></Box>}
        </Box>
      </Box>
    );
}

export default HomePage