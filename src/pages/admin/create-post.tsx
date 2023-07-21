import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Container } from "@mui/material";

import CreateNewPost from "@/sections/@admin/CreateNewPost";
export default function CreatePost() {
  return (
    <Page title={PAGE_TITLE.HOME} admin>
      <Container maxWidth={false}>
        <CreateNewPost />
      </Container>
    </Page>
  );
}