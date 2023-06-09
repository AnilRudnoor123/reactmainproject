import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

const AddTask = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
};
export default AddTask;
