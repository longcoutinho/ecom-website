import * as Yup from "yup";
import { useMemo, useState } from "react";
// next
import { useRouter } from "next/router";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { Box, Card, Stack, Typography } from "@mui/material";
import { PATH_PAGE } from "../../routes/path";
import { FormProvider, RHFEditor } from "@/components/hook-form";
import { useDispatch, AppDispatch } from "@/redux/store";
import { useSnackbar } from "notistack";
import { ICreatePost } from "@/interfaces/request";

export default function CreateNewPost() {
  const { enqueueSnackbar } = useSnackbar();
  const newPostSchema = Yup.object().shape({
    content: Yup.string().required("Content post is required"),
  });

  const defaultValues = useMemo(
    () => ({
      content: "",
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

  const newPost: ICreatePost = {
    content: values.content,
  };

  const handleCreateAndSend = async () => {
    try {
      if (newPost) {
        console.log(newPost);
        enqueueSnackbar("success", { variant: "success" });
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(handleCreateAndSend)}
      >
        <Card sx={{ p: 3, background: "white" }}>
          <Stack spacing={3}>
            <Typography variant="h5" color={"#8F0101"}>
              Tạo bài viết mới
            </Typography>
            <Box>
              <RHFEditor name="content" />
            </Box>
          </Stack>
          <Stack
            justifyContent="flex-end"
            alignItems=""
            direction="row"
            spacing={2}
            sx={{ mt: 3, maxWidth: "500px", float: "right" }}
          >
            <LoadingButton
              fullWidth
              type="submit"
              style={{ color: "white", background: "#8F0101" }}
              size="large"
              loading={isSubmitting}
            >
              Create
            </LoadingButton>
          </Stack>
        </Card>
      </FormProvider>
    </>
  );
}
