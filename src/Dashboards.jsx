import {
  Grid,
  Card,
  Text,
  Table,
  Badge,
  Button,
  Group,
  Stack,
  Modal,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import "@mantine/core/styles.css";

// --- INITIAL MOCK DATA ---
const initialSuppliers = [
  {
    id: 1,
    supplier: "AgriSeed Co.",
    item: "Premium Wheat Seeds",
    qty: "500 kg",
    price: "$2/kg",
    delivery: "Oct 12",
  },
  {
    id: 2,
    supplier: "Fertilizer Hub",
    item: "Organic Compost",
    qty: "2000 kg",
    price: "$0.5/kg",
    delivery: "Oct 15",
  },
];

const initialProducers = [
  {
    id: 1,
    farm: "Green Acres",
    crop: "Raw Wheat",
    qty: "5000 kg",
    price: "$0.8/kg",
    harvestDate: "Jan 10",
  },
  {
    id: 2,
    farm: "Valley Farms",
    crop: "Tomatoes",
    qty: "1200 kg",
    price: "$1.2/kg",
    harvestDate: "Nov 05",
  },
];

const initialProcessors = [
  {
    id: 1,
    factory: "GrainMills Inc",
    product: "Refined Flour",
    qty: "4000 kg",
    price: "$1.5/kg",
    readyDate: "Jan 20",
  },
];

// New mock data for Producer's own yields
const initialMyYields = [
  {
    id: 101,
    farm: "My Farm",
    crop: "Organic Corn",
    qty: "3000 kg",
    price: "$0.9/kg",
    harvestDate: "Sep 20",
  },
  {
    id: 102,
    farm: "My Farm",
    crop: "Soybeans",
    qty: "1500 kg",
    price: "$1.1/kg",
    harvestDate: "Oct 02",
  },
];

// New mock data for Processor's own products
const initialMyProducts = [
  {
    id: 201,
    factory: "My Factory",
    product: "Corn Syrup",
    qty: "1000 L",
    price: "$2.5/L",
    readyDate: "Oct 10",
  },
  {
    id: 202,
    factory: "My Factory",
    product: "Soy Milk",
    qty: "500 L",
    price: "$1.8/L",
    readyDate: "Oct 15",
  },
];

// --- ROLE COMPONENTS ---

export function SupplierDashboard() {
  const [opened, { open, close }] = useDisclosure(false);

  // 1. State for the table data
  const [supplies, setSupplies] = useState(initialSuppliers);

  // 2. State for form inputs
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");

  const handleSubmit = () => {
    const newSupply = {
      id: Date.now(), // Generate a unique ID
      supplier: "My Supplier Co.", // Hardcoded for this view
      item,
      qty,
      price,
      delivery,
    };

    setSupplies([...supplies, newSupply]); // Add to table

    // Clear form and close modal
    setItem("");
    setQty("");
    setPrice("");
    setDelivery("");
    close();
  };

  const rows = supplies.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.item}</Table.Td>
      <Table.Td>{row.qty}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.delivery}</Table.Td>
      <Table.Td>
        <Badge color="green">Active</Badge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add New Supply"
        centered
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <Stack>
          <TextInput
            label="Item Name"
            placeholder="e.g. Premium Seeds"
            value={item}
            onChange={(e) => setItem(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Quantity Available"
            placeholder="e.g. 500 kg"
            value={qty}
            onChange={(e) => setQty(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Price"
            placeholder="e.g. $2/kg"
            value={price}
            onChange={(e) => setPrice(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Estimated Delivery Date"
            placeholder="e.g. Nov 10"
            value={delivery}
            onChange={(e) => setDelivery(e.currentTarget.value)}
            required
          />
        </Stack>
      </Modal>

      <Stack gap="lg" w={"70vw"}>
        <Group justify="space-between">
          <Text size="xl" fw={600}>
            My Supply Offerings
          </Text>
        </Group>
        <Card withBorder shadow="sm" radius="md">
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th>Quantity</Table.Th>
                <Table.Th>Price</Table.Th>
                <Table.Th>Est. Delivery</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </Stack>
    </>
  );
}

export function ProducerDashboard() {
  const [opened, { open, close }] = useDisclosure(false);
  // Initialized with new mock data instead of []
  const [myYields, setMyYields] = useState(initialMyYields);

  // Form states
  const [crop, setCrop] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [harvestDate, setHarvestDate] = useState("");

  const handleSubmit = () => {
    const newYield = {
      id: Date.now(),
      farm: "My Farm",
      crop,
      qty,
      price,
      harvestDate,
    };
    setMyYields([...myYields, newYield]);
    setCrop("");
    setQty("");
    setPrice("");
    setHarvestDate("");
    close();
  };

  const supplierRows = initialSuppliers.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.supplier}</Table.Td>
      <Table.Td>{row.item}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
    </Table.Tr>
  ));

  const yieldRows = myYields.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.crop}</Table.Td>
      <Table.Td>{row.qty}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.harvestDate}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Log Crop Harvest"
        centered
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <Stack>
          <TextInput
            label="Crop Name"
            placeholder="e.g. Raw Wheat"
            value={crop}
            onChange={(e) => setCrop(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Yield Amount"
            placeholder="e.g. 5000 kg"
            value={qty}
            onChange={(e) => setQty(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Selling Price"
            placeholder="e.g. $0.8/kg"
            value={price}
            onChange={(e) => setPrice(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Harvest Date"
            placeholder="e.g. Jan 10"
            value={harvestDate}
            onChange={(e) => setHarvestDate(e.currentTarget.value)}
            required
          />
        </Stack>
      </Modal>

      <Grid w={"70vw"}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text size="lg" fw={600} mb="sm">
            Available Supplies (From Suppliers)
          </Text>
          <Card withBorder shadow="sm" radius="md">
            <Table striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Supplier</Table.Th>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Price</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{supplierRows}</Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Group justify="space-between" mb="sm">
            <Text size="lg" fw={600}>
              My Crop Yields
            </Text>
          </Group>
          <Card withBorder shadow="sm" radius="md">
            {myYields.length === 0 ? (
              <Text c="dimmed" size="sm">
                No harvests logged yet.
              </Text>
            ) : (
              <Table striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Crop</Table.Th>
                    <Table.Th>Qty</Table.Th>
                    <Table.Th>Price</Table.Th>
                    <Table.Th>Date</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{yieldRows}</Table.Tbody>
              </Table>
            )}
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}

export function ProcessorDashboard() {
  const [opened, { open, close }] = useDisclosure(false);
  // Initialized with new mock data instead of []
  const [myProducts, setMyProducts] = useState(initialMyProducts);

  // Form states
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [readyDate, setReadyDate] = useState("");

  const handleSubmit = () => {
    const newProd = {
      id: Date.now(),
      factory: "My Factory",
      product,
      qty,
      price,
      readyDate,
    };
    setMyProducts([...myProducts, newProd]);
    setProduct("");
    setQty("");
    setPrice("");
    setReadyDate("");
    close();
  };

  const producerRows = initialProducers.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.farm}</Table.Td>
      <Table.Td>{row.crop}</Table.Td>
      <Table.Td>{row.qty}</Table.Td>
    </Table.Tr>
  ));

  const productRows = myProducts.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.product}</Table.Td>
      <Table.Td>{row.qty}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
      <Table.Td>{row.readyDate}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Processed Product"
        centered
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <Stack>
          <TextInput
            label="Product Name"
            placeholder="e.g. Refined Flour"
            value={product}
            onChange={(e) => setProduct(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Volume/Quantity"
            placeholder="e.g. 4000 kg"
            value={qty}
            onChange={(e) => setQty(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Price"
            placeholder="e.g. $1.5/kg"
            value={price}
            onChange={(e) => setPrice(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Ready Date"
            placeholder="e.g. Jan 20"
            value={readyDate}
            onChange={(e) => setReadyDate(e.currentTarget.value)}
            required
          />
        </Stack>
      </Modal>

      <Grid w={"70vw"}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text size="lg" fw={600} mb="sm">
            Available Raw Crops (From Producers)
          </Text>
          <Card withBorder shadow="sm" radius="md">
            <Table striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Farm</Table.Th>
                  <Table.Th>Crop</Table.Th>
                  <Table.Th>Volume</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{producerRows}</Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Group justify="space-between" mb="sm">
            <Text size="lg" fw={600}>
              My Processed Goods
            </Text>
          </Group>
          <Card withBorder shadow="sm" radius="md">
            {myProducts.length === 0 ? (
              <Text c="dimmed" size="sm">
                Log your refined goods for distributors to pick up.
              </Text>
            ) : (
              <Table striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Product</Table.Th>
                    <Table.Th>Qty</Table.Th>
                    <Table.Th>Price</Table.Th>
                    <Table.Th>Date</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{productRows}</Table.Tbody>
              </Table>
            )}
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}

export function DistributorDashboard() {
  const processorRows = initialProcessors.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.factory}</Table.Td>
      <Table.Td>{row.product}</Table.Td>
      <Table.Td>{row.qty}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Grid w={"70vw"}>
      <Grid.Col span={{ base: 12, md: 7 }}>
        <Text size="lg" fw={600} mb="sm">
          Ready for Distribution (From Processors)
        </Text>
        <Card withBorder shadow="sm" radius="md">
          <Table striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Factory</Table.Th>
                <Table.Th>Product</Table.Th>
                <Table.Th>Volume</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{processorRows}</Table.Tbody>
          </Table>
        </Card>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 5 }}>
        <Group justify="space-between" mb="sm">
          <Text size="lg" fw={600}>
            Active Routes
          </Text>
        </Group>
        <Card withBorder shadow="sm" radius="md">
          <Text c="dimmed" size="sm">
            No active shipments. Claim a product to begin delivery routing.
          </Text>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
