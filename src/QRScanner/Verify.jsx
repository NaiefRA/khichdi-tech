import {
  Title,
  Text,
  Card,
  TextInput,
  Divider,
  Flex,
  Stack,
  Grid,
  Badge,
  Box,
  Group,
} from "@mantine/core";
import QRScanner from "./QRScanner";
import { useState } from "react";

export default function Verify() {
  const [rawQrData, setRawQrData] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(false);

  const handleScan = (data) => {
    setRawQrData(data);
    console.log("Raw QR Data:", data);

    try {
      // Attempt to parse the QR string into a JSON object
      const parsed = JSON.parse(data);
      setParsedData(parsed);
      setError(false);
    } catch (err) {
      console.error("QR Data is not valid JSON", err);
      setParsedData(null);
      setError(true); // Triggers an error message if they scan a non-JSON QR code
    }
  };

  return (
    <Card w="80vw" shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2}>Verify Shipment</Title>
      <Text mt="md" c="dimmed">
        Scan or enter the shipment ID here to verify the origin and history of
        the batch.
      </Text>

      <TextInput
        mt="md"
        label="Enter Code"
        placeholder="e.g. WHT-PLN-782"
        radius="md"
        w={{ base: "100%", sm: "50%" }}
      />

      <Divider mt="lg" mb="lg" />

      <Flex
        direction={{ base: "column", md: "row" }}
        gap="xl"
        align="flex-start"
      >
        {/* Left Side: Scanner */}
        <Box>
          <Text fw={600} mb="sm">
            QR Scanner
          </Text>
          <Box
            style={{
              border: "2px dashed #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <QRScanner onScan={handleScan} />
          </Box>
        </Box>

        {/* Right Side: Formatted JSON Output */}
        <Box flex={1} w="100%">
          <Text fw={600} mb="sm">
            Scanned Data
          </Text>

          {!parsedData && !error && (
            <Card withBorder bg="gray.0" radius="md">
              <Text c="dimmed" ta="center" py="xl">
                Awaiting scan... Please scan a shipment QR code.
              </Text>
            </Card>
          )}

          {error && (
            <Card withBorder bg="red.0" radius="md">
              <Text c="red" ta="center" py="xl" fw={500}>
                Invalid QR Code format. Please scan a valid shipment JSON code.
              </Text>
              <Text size="xs" c="dimmed" ta="center" mt="xs">
                Raw output: {rawQrData}
              </Text>
            </Card>
          )}

          {parsedData && !error && (
            <Card withBorder shadow="sm" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={4}>Shipment Details</Title>
                <Badge color="green" variant="light">
                  Verified
                </Badge>
              </Group>

              <Grid gutter="md">
                <Grid.Col span={4}>
                  <Text size="sm" c="dimmed" fw={500}>
                    Batch ID
                  </Text>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text fw={600}>{parsedData.batch_id || "N/A"}</Text>
                </Grid.Col>

                <Grid.Col span={4}>
                  <Text size="sm" c="dimmed" fw={500}>
                    Shipment ID
                  </Text>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text>{parsedData.shipment_id || "N/A"}</Text>
                </Grid.Col>

                <Grid.Col span={4}>
                  <Text size="sm" c="dimmed" fw={500}>
                    Item
                  </Text>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Badge color="blue">{parsedData.item || "N/A"}</Badge>
                </Grid.Col>

                <Grid.Col span={4}>
                  <Text size="sm" c="dimmed" fw={500}>
                    Supplier
                  </Text>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text>{parsedData.supplier || "N/A"}</Text>
                </Grid.Col>

                <Grid.Col span={4}>
                  <Text size="sm" c="dimmed" fw={500}>
                    Receiver
                  </Text>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text>{parsedData.receiver || "N/A"}</Text>
                </Grid.Col>
              </Grid>
            </Card>
          )}
        </Box>
      </Flex>
    </Card>
  );
}
