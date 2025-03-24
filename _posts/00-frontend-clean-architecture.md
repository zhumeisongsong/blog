---
title: "Frontend Clean Architecture"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2024-01-05"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
categories: ["architecture"]
---

以下是一个基于 分层架构 和清晰职责分离的项目目录结构示例，结合你提到的场景（用户偏好、任务生成、OpenAI API 集成等）。这个结构适用于四层架构：Application、Domain、Infrastructure、Interface-Adapters。

项目目录结构
graphql
Copy code
src/
├── application/          # 用例层，无状态逻辑
│   ├── usecases/         # 具体用例
│   │   ├── GenerateTasksUseCase.ts
│   │   ├── GetUserPreferencesUseCase.ts
│   │   └── UpdateUserPreferencesUseCase.ts
│   └── services/         # 可选，用于抽象多个用例共享的逻辑
│       └── TaskService.ts
│
├── domain/               # 领域层，核心业务逻辑
│   ├── entities/         # 实体和值对象
│   │   ├── UserPreferences.ts
│   │   └── Task.ts
│   ├── services/         # 领域服务
│   │   └── TaskGenerationService.ts
│   └── repositories/     # 仓储接口
│       ├── TaskRepository.ts
│       └── UserPreferencesRepository.ts
│
├── infrastructure/       # 基础设施层，与外部服务交互
│   ├── adapters/         # 外部服务的适配器
│   │   ├── OpenAITaskGenerationService.ts
│   │   └── RESTUserPreferencesRepository.ts
│   ├── config/           # 基础设施相关的配置
│   │   └── openaiConfig.ts
│   └── persistence/      # 数据持久化相关的实现
│       └── LocalStorageUserPreferencesRepository.ts
│
├── interface-adapters/   # 接口适配器层，负责状态管理和前端逻辑
│   ├── components/       # React 组件
│   │   ├── SelfCareTopicsSelector.tsx
│   │   └── TaskList.tsx
│   ├── hooks/            # 自定义 React Hooks
│   │   ├── useGenerateTasks.ts
│   │   └── useUserPreferences.ts
│   ├── state/            # 状态管理
│   │   ├── taskState.ts
│   │   └── userPreferencesState.ts
│   └── routes/           # 应用的路由
│       ├── TasksPage.tsx
│       └── PreferencesPage.tsx
│
└── main.ts               # 应用程序入口文件
目录层级详解
1. application/
职责：
实现应用的用例逻辑，组织领域层和基础设施层的调用。
无状态，不涉及外部系统或直接持久化，只关注业务逻辑流程。
示例内容：
GenerateTasksUseCase.ts: 调用 TaskGenerationService 生成任务。
UpdateUserPreferencesUseCase.ts: 调用 UserPreferencesRepository 更新用户偏好。
2. domain/
职责：
包含业务的核心逻辑，是整个系统的中心。
定义领域实体、值对象、领域服务、仓储接口等。
示例内容：
实体:
UserPreferences.ts（用户偏好，保存主题等信息）。
Task.ts（任务实体，定义任务的属性和逻辑）。
服务:
TaskGenerationService.ts（任务生成接口的定义，可能通过 OpenAI 实现）。
仓储接口:
TaskRepository.ts（定义任务的增删改查）。
UserPreferencesRepository.ts（定义用户偏好的操作方法）。
3. infrastructure/
职责：
实现领域层定义的接口，与外部系统（如数据库、第三方 API）交互。
持久化逻辑和外部适配器的具体实现。
示例内容：
适配器:
OpenAITaskGenerationService.ts（实现与 OpenAI 的 API 调用）。
RESTUserPreferencesRepository.ts（通过 RESTful API 获取/存储用户偏好）。
持久化:
LocalStorageUserPreferencesRepository.ts（基于浏览器 LocalStorage 的实现）。
配置:
openaiConfig.ts（存储 OpenAI API 的密钥等配置）。
4. interface-adapters/
职责：
负责将用户输入映射到应用用例，或者将数据绑定到界面。
包含 React 组件、自定义 Hooks 和状态管理逻辑。
示例内容：
组件:
SelfCareTopicsSelector.tsx: 用户选择自我关怀主题。
TaskList.tsx: 显示生成的任务列表。
状态管理:
taskState.ts: 使用状态管理工具（如 Zustand、Valtio）管理任务状态。
userPreferencesState.ts: 管理用户偏好。
Hooks:
useGenerateTasks.ts: 调用 GenerateTasksUseCase 并更新状态。
useUserPreferences.ts: 处理用户偏好的获取和更新。
5. main.ts
职责：
应用的入口文件，负责配置依赖注入、初始化状态和启动应用。
扩展说明
依赖注入：
在 main.ts 中，通过依赖注入将 OpenAITaskGenerationService 和其他服务的实例注入到用例中。
状态管理：
全局状态（如用户偏好、生成的任务列表）放在 interface-adapters/state，通过工具（如 Valtio 或 Zustand）实现。
典型调用链示例
当用户选择主题并点击生成任务时：

前端调用 useGenerateTasks 自定义 Hook。
useGenerateTasks 使用 GenerateTasksUseCase（在 Application 层）。
GenerateTasksUseCase 调用 TaskGenerationService 接口。
TaskGenerationService 的实现由 OpenAITaskGenerationService 提供（在 Infrastructure 层）。
OpenAI 返回的任务被传回并更新到状态管理。
这样，每一层的职责都非常明确，方便扩展和维护。



## References
https://phodal.github.io/clean-frontend/
https://bespoyasov.me/blog/clean-architecture-on-frontend/
https://github.com/bespoyasov/frontend-clean-architecture
