import {
  Card,
  Text,
  Table,
  Badge,
  Group,
  Stack,
  Progress,
  Box,
} from "@mantine/core";

// --- ROLE-SPECIFIC MOCK DATA ---

export const mockSupplierData = [
  {
    id: "TRK-1001",
    batchNumber: "BCH-WHT-001",
    item: "Premium Wheat Seeds",
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Oct 10, 2023",
      dispatched: "Oct 12, 2023",
      delivered: "Oct 15, 2023",
    },
    type: "Outgoing",
    verification: "Verified",
  },
  {
    id: "TRK-1002",
    batchNumber: "BCH-CMP-042",
    item: "Organic Compost",
    status: "Dispatched",
    progress: 60,
    timestamps: {
      placed: "Oct 14, 2023",
      dispatched: "Oct 15, 2023",
      delivered: "Pending",
    },
    type: "Outgoing",
    verification: "Not Done",
  },
  {
    id: "TRK-1003",
    batchNumber: "BCH-FRT-099",
    item: "Nitrogen Fertilizer",
    status: "Placed",
    progress: 20,
    timestamps: {
      placed: "Oct 16, 2023",
      dispatched: "Pending",
      delivered: "Pending",
    },
    type: "Outgoing",
    verification: "Not Done",
  },
  {
    id: "TRK-1004",
    batchNumber: "BCH-PST-101",
    item: "Eco-Pesticide",
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Sep 20, 2023",
      dispatched: "Sep 22, 2023",
      delivered: "Sep 25, 2023",
    },
    type: "Outgoing",
    verification: "Failed",
  },
];

export const mockProducerData = [
  {
    id: "TRK-2001",
    batchNumber: "BCH-WHT-001",
    item: "Premium Wheat Seeds", // Received from supplier
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Oct 10, 2023",
      dispatched: "Oct 12, 2023",
      delivered: "Oct 15, 2023",
    },
    type: "Incoming",
    verification: "Verified",
  },
  {
    id: "TRK-2002",
    batchNumber: "BCH-CMP-042",
    item: "Organic Compost", // Incoming from supplier
    status: "Dispatched",
    progress: 60,
    timestamps: {
      placed: "Oct 14, 2023",
      dispatched: "Oct 15, 2023",
      delivered: "Pending",
    },
    type: "Incoming",
    verification: "Not Done",
  },
  {
    id: "TRK-2003",
    batchNumber: "BCH-RAW-088",
    item: "Raw Wheat Yield", // Harvested and sending to Processor
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Jan 12, 2024",
      dispatched: "Jan 14, 2024",
      delivered: "Jan 16, 2024",
    },
    type: "Outgoing",
    verification: "Verified",
  },
  {
    id: "TRK-2004",
    batchNumber: "BCH-RAW-089",
    item: "Raw Tomatoes",
    status: "Placed",
    progress: 15,
    timestamps: {
      placed: "Jan 18, 2024",
      dispatched: "Pending",
      delivered: "Pending",
    },
    type: "Outgoing",
    verification: "Not Done",
  },
];

export const mockProcessorData = [
  {
    id: "TRK-3001",
    batchNumber: "BCH-RAW-088",
    item: "Raw Wheat Yield", // Incoming from Producer
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Jan 12, 2024",
      dispatched: "Jan 14, 2024",
      delivered: "Jan 16, 2024",
    },
    type: "Incoming",
    verification: "Verified",
  },
  {
    id: "TRK-3002",
    batchNumber: "BCH-RAW-089",
    item: "Raw Tomatoes", // Incoming from Producer
    status: "Placed",
    progress: 15,
    timestamps: {
      placed: "Jan 18, 2024",
      dispatched: "Pending",
      delivered: "Pending",
    },
    type: "Incoming",
    verification: "Not Done",
  },
  {
    id: "TRK-3003",
    batchNumber: "BCH-FLR-102",
    item: "Refined Flour", // Processed goods sending to Distributor
    status: "Dispatched",
    progress: 75,
    timestamps: {
      placed: "Feb 01, 2024",
      dispatched: "Feb 03, 2024",
      delivered: "Pending",
    },
    type: "Outgoing",
    verification: "Not Done",
  },
  {
    id: "TRK-3004",
    batchNumber: "BCH-PUR-103",
    item: "Tomato Puree",
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Jan 25, 2024",
      dispatched: "Jan 27, 2024",
      delivered: "Jan 29, 2024",
    },
    type: "Outgoing",
    verification: "Verified",
  },
];

export const mockDistributorData = [
  {
    id: "TRK-4001",
    batchNumber: "BCH-FLR-102",
    item: "Refined Flour", // Incoming from Processor
    status: "Dispatched",
    progress: 75,
    timestamps: {
      placed: "Feb 01, 2024",
      dispatched: "Feb 03, 2024",
      delivered: "Pending",
    },
    type: "Incoming",
    verification: "Not Done",
  },
  {
    id: "TRK-4002",
    batchNumber: "BCH-PUR-103",
    item: "Tomato Puree", // Incoming from Processor
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Jan 25, 2024",
      dispatched: "Jan 27, 2024",
      delivered: "Jan 29, 2024",
    },
    type: "Incoming",
    verification: "Verified",
  },
  {
    id: "TRK-4003",
    batchNumber: "BCH-RET-201",
    item: "Flour 1kg Packets", // Shipping to Retailer
    status: "Placed",
    progress: 25,
    timestamps: {
      placed: "Feb 05, 2024",
      dispatched: "Pending",
      delivered: "Pending",
    },
    type: "Outgoing",
    verification: "Not Done",
  },
  {
    id: "TRK-4004",
    batchNumber: "BCH-RET-202",
    item: "Puree 500g Jars", // Shipping to Retailer
    status: "Delivered",
    progress: 100,
    timestamps: {
      placed: "Feb 02, 2024",
      dispatched: "Feb 03, 2024",
      delivered: "Feb 04, 2024",
    },
    type: "Outgoing",
    verification: "Verified",
  },
];

// --- TRACK COMPONENT ---
export default function Track({ data = [] }) {
  const renderRow = (row) => {
    // Determine status colors
    const statusColor =
      row.status === "Delivered"
        ? "green"
        : row.status === "Dispatched"
          ? "blue"
          : "orange";

    // Logic for the Verification Column
    let verificationBadge;
    if (row.status !== "Delivered") {
      verificationBadge = (
        <Text size="xs" c="dimmed" fs="italic">
          Awaiting Delivery
        </Text>
      );
    } else {
      if (row.verification === "Verified") {
        verificationBadge = (
          <Badge color="teal" variant="filled">
            Success
          </Badge>
        );
      } else if (row.verification === "Failed") {
        verificationBadge = (
          <Badge color="red" variant="filled">
            Failed
          </Badge>
        );
      } else {
        verificationBadge = (
          <Badge color="gray" variant="light">
            Not Done
          </Badge>
        );
      }
    }

    return (
      <Table.Tr key={row.id}>
        <Table.Td fw={600}>{row.batchNumber}</Table.Td>
        <Table.Td>{row.item}</Table.Td>
        <Table.Td>
          <Badge color={statusColor} variant="light">
            {row.status}
          </Badge>
        </Table.Td>

        {/* Verification Column */}
        <Table.Td>{verificationBadge}</Table.Td>

        {/* Tracking Timeline Column */}
        <Table.Td w="40%">
          <Box mb="xs">
            <Progress
              value={row.progress}
              size="md"
              color={statusColor}
              radius="xl"
            />
          </Box>
          <Group justify="space-between" wrap="nowrap">
            <Stack gap={0} align="flex-start">
              <Text size="xs" fw={600}>
                Placed
              </Text>
              <Text size="xs" c="dimmed">
                {row.timestamps.placed}
              </Text>
            </Stack>
            <Stack gap={0} align="center">
              <Text size="xs" fw={600}>
                Dispatched
              </Text>
              <Text size="xs" c="dimmed">
                {row.timestamps.dispatched}
              </Text>
            </Stack>
            <Stack gap={0} align="flex-end">
              <Text size="xs" fw={600}>
                Delivered
              </Text>
              <Text size="xs" c="dimmed">
                {row.timestamps.delivered}
              </Text>
            </Stack>
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  };

  // Filter the passed-in data array
  const incomingRows = data.filter((r) => r.type === "Incoming").map(renderRow);
  const outgoingRows = data.filter((r) => r.type === "Outgoing").map(renderRow);

  return (
    <Stack gap="xl" w="80vw">
      {/* INCOMING ORDERS SECTION */}
      {incomingRows.length > 0 && (
        <Stack gap="sm">
          <Group justify="space-between">
            <Text size="xl" fw={600}>
              Incoming Orders (Receiving)
            </Text>
          </Group>
          <Card withBorder shadow="sm" radius="md" p={0}>
            <Table striped highlightOnHover verticalSpacing="md">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Batch Number</Table.Th>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Verification</Table.Th>
                  <Table.Th>Tracking Timeline</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{incomingRows}</Table.Tbody>
            </Table>
          </Card>
        </Stack>
      )}

      {/* OUTGOING SHIPMENTS SECTION */}
      {outgoingRows.length > 0 && (
        <Stack gap="sm">
          <Group justify="space-between">
            <Text size="xl" fw={600}>
              Outgoing Shipments (Dispatching)
            </Text>
          </Group>
          <Card withBorder shadow="sm" radius="md" p={0}>
            <Table striped highlightOnHover verticalSpacing="md">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Batch Number</Table.Th>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Verification</Table.Th>
                  <Table.Th>Tracking Timeline</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{outgoingRows}</Table.Tbody>
            </Table>
          </Card>
        </Stack>
      )}

      {/* Fallback if no data exists */}
      {incomingRows.length === 0 && outgoingRows.length === 0 && (
        <Text c="dimmed" fs="italic">
          No tracking data available for your role.
        </Text>
      )}
    </Stack>
  );
}
