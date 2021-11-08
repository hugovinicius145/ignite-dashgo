import { Text, Flex, Box, Avatar} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Hugo Vinicius</Text>
          <Text 
            color="gray.300"
            fontSize="small"
          >
            hvls36@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Hugo Vinicius" src="https://github.com/hugovinicius145.png" />
    </Flex>
  );
}