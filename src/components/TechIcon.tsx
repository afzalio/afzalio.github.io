import React from "react";
import {
  Server,
  Code2,
  Cpu,
  Layers,
  Zap,
  Atom,
  Globe,
  FileCode,
  Layout,
  Palette,
  Component,
  Boxes,
  Database,
  HardDrive,
  GitBranch,
  Webhook,
  Radio,
  Key,
  Package,
  Box,
  Network,
  Container,
  Workflow,
  Cloud,
  Gauge
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  switch (name) {
    case "Server": return <Server className={className} size={size} />;
    case "Code2": return <Code2 className={className} size={size} />;
    case "Cpu": return <Cpu className={className} size={size} />;
    case "Layers": return <Layers className={className} size={size} />;
    case "Zap": return <Zap className={className} size={size} />;
    case "Atom": return <Atom className={className} size={size} />;
    case "Globe": return <Globe className={className} size={size} />;
    case "FileCode": return <FileCode className={className} size={size} />;
    case "Layout": return <Layout className={className} size={size} />;
    case "Palette": return <Palette className={className} size={size} />;
    case "Component": return <Component className={className} size={size} />;
    case "Boxes": return <Boxes className={className} size={size} />;
    case "Database": return <Database className={className} size={size} />;
    case "HardDrive": return <HardDrive className={className} size={size} />;
    case "GitBranch": return <GitBranch className={className} size={size} />;
    case "Github": return <GithubIcon className={className} size={size} />;
    case "Webhook": return <Webhook className={className} size={size} />;
    case "Radio": return <Radio className={className} size={size} />;
    case "Key": return <Key className={className} size={size} />;
    case "Package": return <Package className={className} size={size} />;
    case "Box": return <Box className={className} size={size} />;
    case "Network": return <Network className={className} size={size} />;
    case "Container": return <Container className={className} size={size} />;
    case "Workflow": return <Workflow className={className} size={size} />;
    case "Cloud": return <Cloud className={className} size={size} />;
    case "Gauge": return <Gauge className={className} size={size} />;
    default: return <Code2 className={className} size={size} />;
  }
};
