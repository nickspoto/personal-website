import { Box, Typography, useTheme } from "@mui/material";
import { InitialsIcon } from "./styles";

export const TopNav: React.FC<{ props: string }> = () => {
  const theme = useTheme();

  return (
    <Box>
      <InitialsIcon>
        <Typography
          variant="h6"
          textAlign="center"
          color={`${theme.palette.grey[800]}`}
        >
          N
        </Typography>
      </InitialsIcon>
    </Box>
  );
};
