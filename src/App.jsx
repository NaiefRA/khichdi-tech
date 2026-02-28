import {
  AppShell,
  Burger,
  Group,
  Text,
  Button,
  NavLink,
  Badge,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Login from "./Login/Login";
import {
  SupplierDashboard,
  ProducerDashboard,
  ProcessorDashboard,
  DistributorDashboard,
} from "./Dashboards";
import Verify from "./QRScanner/Verify";
import "./QRScanner/scanner.css";

// Imported the mock data alongside the Track component
import Track, {
  mockSupplierData,
  mockProducerData,
  mockProcessorData,
  mockDistributorData, // <--- Add this
} from "./Track/Track";

function App() {
  const [opened, { toggle }] = useDisclosure();
  // isLogin is false means we are logged in for this logic flow (showing AppShell)
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("");

  const [activePage, setActivePage] = useState("dashboard");

  const handleLogout = () => {
    setIsLogin(true); // Shows login screen
    setUserType("");
    setActivePage("dashboard");
  };

  const renderDashboardMain = () => {
    switch (userType) {
      case "Supplier":
        return <SupplierDashboard />;
      case "Producer":
        return <ProducerDashboard />;
      case "Processor":
        return <ProcessorDashboard />;
      case "Distributor":
        return <DistributorDashboard />;
      default:
        return <Text>Please select a valid role.</Text>;
    }
  };

  // Helper function to pass the correct data to the Track component based on role
  const renderTrackMain = () => {
    switch (userType) {
      case "Supplier":
        return <Track data={mockSupplierData} />;
      case "Producer":
        return <Track data={mockProducerData} />;
      case "Processor":
        return <Track data={mockProcessorData} />;
      case "Distributor":
        // Fallback to empty array if mockDistributorData isn't created yet
        return <Track data={[]} />;
      default:
        return <Text>Please select a valid role.</Text>;
    }
  };

  return (
    <>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} setUserType={setUserType} />
      ) : (
        <AppShell
          padding="md"
          header={{ height: 60 }}
          navbar={{
            width: 250,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          bg="gray.0"
        >
          <AppShell.Header>
            <Group h="100%" px="md" justify="space-between">
              <Group>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Text fw={700} size="lg" c="green.8">
                  KhichdiTech AgriChain
                </Text>
              </Group>

              <Group>
                <Badge variant="light" color="blue" size="lg">
                  Role: {userType}
                </Badge>
                <Button
                  variant="subtle"
                  color="red"
                  size="xs"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Group>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar p="sm">
            <Text size="xs" fw={500} c="dimmed" mb="sm">
              MAIN MENU
            </Text>

            <NavLink
              label="Overview Dashboard"
              active={activePage === "dashboard"}
              onClick={() => setActivePage("dashboard")}
              variant="light"
            />
            <NavLink
              label="Verify Shipment"
              active={activePage === "verify"}
              onClick={() => setActivePage("verify")}
              variant="light"
            />
            <NavLink
              label="Track Orders"
              active={activePage === "track"}
              onClick={() => setActivePage("track")}
              variant="light"
            />
          </AppShell.Navbar>

          <AppShell.Main>
            {activePage === "dashboard" && renderDashboardMain()}
            {activePage === "verify" && <Verify />}
            {/* Inject the role-specific tracking data here */}
            {activePage === "track" && renderTrackMain()}
          </AppShell.Main>
        </AppShell>
      )}
    </>
  );
}

export default App;
