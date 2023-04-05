import { useState } from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import "react-quill/dist/quill.snow.css";
import TextEditor from "@/components/Editor";

export default function CreateNewPost() {
  const { enqueueSnackbar } = useSnackbar();
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      if (content) {
        console.log(content);
        enqueueSnackbar("success", { variant: "success" });
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <Card sx={{ p: 3, background: "white" }}>
      <Stack spacing={3}>
        <Typography variant="h5" color={"#8F0101"}>
          Tạo bài viết mới
        </Typography>
        <Box>
          <TextEditor value={content} onChange={(e: any) => setContent(e)} />
        </Box>
      </Stack>
      <Stack
        justifyContent="flex-end"
        alignItems=""
        direction="row"
        spacing={2}
        sx={{ mt: 3, maxWidth: "500px", float: "right" }}
      >
        <Button
          fullWidth
          style={{ color: "white", background: "#8F0101" }}
          size="large"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Stack>
    </Card>
  );
}
