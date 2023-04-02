import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import {
  Box,
  Button,
  Card,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import * as Yup from "yup";
import { RHFEditor, RHFTextField } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@/components/hook-form";

export default function CreatePost() {
  const newPostSchema = Yup.object().shape({
    post: Yup.string().required("Post is required"),
  });
  const defaultValues = useMemo(
    () => ({
      post: "",
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(newPostSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values: any = watch();

  const newPost: any = {
    post: values.post,
  };

  const onHandleSubmit = () => {
    console.log("submit");
  };

  return (
    <Page title={PAGE_TITLE.HOME} admin>
      <Container maxWidth={false}>
        <FormProvider method={methods} onSubmit={handleSubmit(onHandleSubmit)}>
          <Card>
            <Typography variant="h5">Tạo bài viết mới</Typography>
            <Box>
              {/* <RHFEditor name="post" /> */}
              <TextField>ffkfjf</TextField>
            </Box>
            <Button type="submit">Create</Button>
          </Card>
        </FormProvider>
      </Container>
    </Page>
  );
}
