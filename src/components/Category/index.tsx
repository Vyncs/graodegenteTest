import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomTab, TitleCategory } from "./style";
import SliderCategory from "./SliderCategory";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <TitleCategory>
        <h1>Categorias em <strong>destaque</strong></h1>
      </TitleCategory>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <CustomTab label="Enxoval e acessórios" {...a11yProps(0)} />
            <CustomTab label="Móveis" {...a11yProps(1)} />
            <CustomTab label="Combos" {...a11yProps(2)} />
            <CustomTab label="Infantil" {...a11yProps(3)} />
            <CustomTab label="Moda" {...a11yProps(4)} />
          </Tabs>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TabPanel value={value} index={0}>
          <SliderCategory />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SliderCategory />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SliderCategory />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SliderCategory />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SliderCategory />
        </TabPanel>
      </Box>
    </>
  );
}
