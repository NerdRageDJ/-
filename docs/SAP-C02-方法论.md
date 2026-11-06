# SAP-C02 做题方法论

> 由 `methods.js` 自动生成，请勿直接编辑。题号对应个人题库 CSV 的“原题号”。

## 一、四步审题法

- **① 先读问句，定评分标准**：跳到题目最后一句：“运维开销最少 / 最具成本效益 / 停机最少 / 性能最好 / 最安全”。这句话决定在“都能实现”的选项里谁胜出。没有比较级（只问“满足要求”）时，只看哪一项能完整满足所有硬约束。
- **② 回到题干，圈硬约束**：找“必须 / 不能 / 不得 / 仅 / 已经有”。数字（RPO、RTO、TB、Mbps、分钟）、协议（MQTT、SFTP、SMB、UDP）、边界（不走公网、不改代码、固定 IP、指定区域）各圈一个。每条硬约束通常能直接排除一个选项。
- **③ 定位场景，想出“标准答案”**：不看选项，先用一句话说出你认为的标准方案（例如“连接数爆了 → RDS Proxy”）。这一步借助下面的“关键词 → 服务”反射。
- **④ 看选项：先排除，再比较**：先划掉含“手动 / 自建 EC2 / 公网 / 长期密钥 / 不存在的功能”的项；剩下两项时，只比较它们的差异点，按第①步的评分标准裁决。多选题按需求点逐个对号入座。

## 二、683 道题统计出来的规律

| 指标 | 结果 |
| --- | --- |
| 全题库任一选项为正确的概率 | 30%（4 选 1 单选基准为 25%） |
| 单选题中“最长”选项正确率 | 33%（略高于基准，不能单靠它） |
| 单选题中“最短”选项正确率 | 17%（明显偏低，可优先怀疑） |
| 与其他选项“长得最不像”的那项 | 17%（孤立的离群选项多为凑数） |
| 含“手动”的选项 | 12% |
| 含“每天/每小时”定时跑的选项 | 10% / 18%（题干要实时或事件驱动时几乎必错） |
| 含“替换”的选项 | 19% |
| 含“公共/互联网”的选项 | 22% / 24% |
| 含“IAM 用户”的选项 | 22%（长期凭证思路多为干扰） |
| “最少运维”题里含 EC2 的选项 | 17% |
| “最少运维”题里含 Lambda 的选项 | 19%（自写胶水代码也算运维） |
| “最少运维”题里含 Config 规则的选项 | 10% |
| “最少运维”题里含 RAM / Fargate / CloudFront | 56% / 50% / 50% |
| 全题库高胜率关键词 | RDS Proxy 58%、PrivateLink 48%、SCT 47%、Lambda@Edge 46%、Secrets Manager 44%、RAM 43%、AWS Backup 41% |
| 全题库低胜率关键词 | VPC 对等 15%、快照 16%、Trusted Advisor 17%、Storage Gateway 17%、Redshift 17%、Snowball 19% |
| 单选正确答案字母分布 | A 24% / B 31% / C 28% / D 17%（只作为最后的瞎蒙参考） |

## 三、妙招（33 条）

### 审题

1. **先读最后一句问句，再读题干**：问句决定评分标准。题库里约 117 题问“运维最少”、81 题问“成本”、80 题问“性能/延迟”、41 题问“停机/RPO/RTO”。带着标准读题干，读到相关信息时就能立刻判断。（例题：#623 #32 #97 #273）
2. **“必须 / 不能 / 不得”每条都是一把刀**：把硬约束逐条列出来，每条都去砍选项。例如“数据不得通过互联网” → 砍掉所有走 NAT/公网的选项；“第三方只白名单原公网 CIDR” → 只剩 BYOIP。（例题：#262 #193 #407 #521）
3. **把数字翻译成服务**：RPO 约 1 秒 / RTO 约 1 分钟 → Aurora Global Database、DynamoDB 全局表；服务器级 RPO 秒级 → Elastic Disaster Recovery；RPO 5 分钟 + RTO 十几分钟 → 跨区域只读副本提升；可丢一天/几小时 → AWS Backup 跨区域复制。任务超过 15 分钟 → 不能用 Lambda。（例题：#301 #58 #502 #150 #415 #32）
4. **症状本身就是答案**：题干描述的故障现象通常直接对应一个“药”：too many connections → RDS Proxy；首请求慢/冷启动 → 预置并发；坏消息反复重试拖住队列 → 死信队列；处理时间长于可见性超时 → 调大可见性超时；扩容启动慢 → Warm Pool。（例题：#15 #170 #349 #496 #317 #22 #178）
5. **协议名 = 服务名**：MQTT → IoT Core；SFTP/FTP/AS2 → Transfer Family；SMB + AD → FSx for Windows（或 S3 File Gateway）；Linux NFS 共享 → EFS；POSIX 高吞吐 + 与 S3 同步 → FSx for Lustre；iSCSI → Volume Gateway（缓存模式）；UDP → NLB + Global Accelerator；RabbitMQ → Amazon MQ；MongoDB → DocumentDB；Kafka → MSK。（例题：#31 #138 #52 #604 #216 #498 #300 #469 #109 #351 #395）
6. **“数百账户 / 所有账户 / 未来新账户”= 上组织级工具**：看到账户规模词，答案就在组织层：Organizations 全部功能 + SCP、StackSets 服务托管权限 + 自动部署、Firewall Manager、委托管理员、组织 Trail、Control Tower。逐账户手工配置的选项全部排除。（例题：#101 #286 #616 #657 #169 #59）
7. **“现有和将来的都要” = 要自动化钩子**：“新建账户也要自动生效”说明要找能自动覆盖新对象的机制：StackSets 自动部署、组织级 Trail、Control Tower 控制、CreateAccount 事件触发 EventBridge、EBS 默认加密。只修复存量的选项不完整。（例题：#616 #634 #198 #450 #443）
8. **时间词：实时 vs 定时**：题干写“实时/立即/近实时”，答案是事件驱动（S3 事件、EventBridge、Kinesis、SNS），轮询和定时任务选项几乎必错（含“每天”的选项正确率仅 10%）。题干写“每晚/批量/可重跑”，才考虑定时 + Spot/Batch。（例题：#166 #232 #136 #550）
9. **“不改代码 / 少改动 / 不能改第三方应用”**：这类题考的是 Replatform：选兼容的托管替代品，不选重构。SQL Server → Aurora PostgreSQL + Babelfish；MongoDB → DocumentDB；RabbitMQ → Amazon MQ；第三方应用要加登录 → ALB 认证 + Cognito；不改 Lambda 限流 → API Gateway 使用计划。（例题：#40 #351 #190 #21 #656）
10. **负载形态决定购买方式**：已知日期的峰值 → 计划扩展/提前放大；可中断、可重跑、时间宽松 → Spot（或 Batch Spot）；全年稳定 → Savings Plans / RI；EC2 正在向 Fargate/Lambda 迁移 → Compute Savings Plans；长期空闲后突发 → Serverless（Aurora Serverless v2）。（例题：#9 #344 #366 #217 #578 #534）

### 选项

11. **第一刀先砍“手动”**：含“手动”的选项正确率仅 12%。“人工检查”“逐个账户配置”“登录每台机器”都是陷阱，除非题目本身要求人工审批。（例题：#134 #107 #26）
12. **最少运维的优先级：开关 > 配置 > Lambda > EC2**：在“运维最少”题里，含 EC2 的选项只有 17% 正确，含 Lambda 的只有 19%，含 Config 规则的只有 10%；而 RAM 共享、Fargate、CloudFront 等“开关式”方案达到 50% 以上。口诀：能开开关不写代码，能写配置不写 Lambda，能用 Lambda 不起 EC2。（例题：#683 #29 #460 #623）
13. **找“只差一个细节”的两个选项**：出题人通常以正确答案为模板改一两处造干扰项。单选题里与其他选项差异最大的那项正确率只有 17%，最短的也只有 17%。先找出两两只差一个细节的选项对，答案多半在其中，只需比较差异点。（例题：#467 #139 #255）
14. **一处错误零件，整句就错**：长选项逐段核对，只要有一个零件不成立就排除：SCP 授予权限、Deep Archive 五分钟内取回、Lambda 跑两小时、DAX 加速写入、ALB 接 UDP/原生 MQTT、在路由表里加“拒绝”规则、跨区域异步复制保证零丢失。（例题：#60 #80 #93 #373 #514 #151）
15. **两个都可行时，回到问句裁决**：运维问 → 更托管的；成本问 → 更便宜的（Spot < Savings Plans < 按需；S3 存储层级）；性能问 → 缓存、边缘、就近区域；可用性问 → 多 AZ、多区域、自动故障转移。不要用自己的偏好裁决。（例题：#74 #230 #454 #471）
16. **多选题：拆需求点，一项管一点**：多选题的正确项通常各自解决题干的一个需求点，彼此互补而不重复。先把题干拆成 2 或 3 个需求点，再对号入座；两个选项做同一件事时一般只对一个。（例题：#1 #2 #457 #235 #357）
17. **跨账户访问要“几道门”同时打开**：跨账户访问 S3/KMS：资源策略（桶策略）放行 + 调用方身份策略允许 + KMS 密钥策略允许解密，缺一不可。SCP 和权限边界只设上限，不授予权限，“允许了还是被拒绝”就去查它们。（例题：#152 #615 #60 #238 #355）
18. **长期凭证类选项基本是干扰**：含“IAM 用户”的选项正确率 22%。赢家是角色 + STS 临时凭证：GitHub 等外部 CI → OIDC；员工登录 → Identity Center；第三方 → 跨账户角色 + ExternalId；数据库密码 → Secrets Manager 轮换。（例题：#260 #63 #622 #505 #174 #510）
19. **题干强调私网，“公网”选项先排除**：含“公共/互联网”的选项正确率仅 22–24%。题干只要出现“不经过互联网/私网”，就只在 VPC 端点、PrivateLink、DX、Client VPN 中选。（例题：#262 #275 #342 #572）
20. **警惕过时服务名**：Server Migration Service（SMS）已停用，迁移服务器用 MGN；Snowmobile 已停用；CloudWatch Events 现为 EventBridge。题库原答案若用旧服务，按当前服务的思路理解，不死记字母。（例题：#491 #606 #401）

### 关键词

21. **固定 IP / 白名单：分清入站和出站**：入站要固定 IP → Global Accelerator（任意协议、全球）或 NLB 绑 EIP；ALB 前要固定 IP → NLB 前置 ALB 或 Global Accelerator；出站要固定 IP → NAT 网关绑 EIP；迁移后要保留原地址 → BYOIP。（例题：#372 #559 #565 #255 #185 #215 #226 #193）
22. **私网访问 AWS 服务：网关端点还是接口端点**：VPC 内访问 S3/DynamoDB 且想省 NAT 费 → 网关端点（免费）；本地或对等网络访问 S3 → 接口端点；其他服务（Kinesis、execute-api、SSM 等）→ 接口端点并开启私有 DNS。（例题：#139 #440 #475 #572 #416 #163）
23. **VPC 互联三选一**：CIDR 重叠或只暴露一个服务 → PrivateLink（NLB + 端点服务）；大量 VPC 互通、按环境隔离 → Transit Gateway + 多路由表；让其他账户直接用中央网络 → RAM 共享子网。VPC 对等在题库里正确率仅 15%。（例题：#661 #521 #130 #384 #473 #208）
24. **混合 DNS 看方向**：本地要解析云上私有域 → Route 53 Resolver 入站端点 + 本地条件转发；云上要解析本地域 → 出站端点 + 转发规则（RAM 共享给多账户、关联所有 VPC）。（例题：#201 #322 #254 #452 #524）
25. **数据怎么搬：先做带宽算术**：数据量 ÷ 带宽 = 天数，超出期限就用 Snowball Edge。网络够用：文件 → DataSync；数据库 → DMS（异构先 SCT）；整台服务器 → MGN；容灾 → DRS；长期混合访问 → Storage Gateway。（例题：#91 #64 #87 #231 #340 #650 #244 #590 #436）
26. **迁移评估三件套**：要 TCO/商业论证 → Migration Evaluator（可导入 CMDB/CSV）；要进程和网络依赖 → Application Discovery Agent；不能装代理 → 无代理采集；汇总与规划 → Migration Hub（含策略建议）。（例题：#20 #103 #470 #671 #75 #558 #609 #302）
27. **发布与回滚**：Lambda 灰度 → 别名权重 / CodeDeploy 金丝雀 + 告警回滚；Beanstalk 蓝绿 → 交换环境 URL；ASG 打补丁 → 新 AMI + 启动模板 + Instance Refresh；部署前拦截不合规资源 → CloudFormation Hooks；删除堆栈要保留数据 → DeletionPolicy Retain。（例题：#38 #268 #405 #369 #426 #240 #377 #319）
28. **成本分账与告警**：按团队/项目分账 → 在管理账户激活成本分配标签 + CUR/成本类别 + Cost Explorer；超预算提醒 → Budgets + SNS；不让某账户共享 RI 折扣 → 在账单中关闭 RI 共享；规格建议 → Compute Optimizer（内存指标需装 CloudWatch Agent）。（例题：#135 #639 #457 #25 #554 #365 #50）
29. **缓存放在哪一层**：会话状态 → ElastiCache Redis 或 DynamoDB；DynamoDB 读热点 → DAX（不解决写入）；API 重复 GET → API Gateway 缓存；静态/大文件 → CloudFront；CloudFront 命中率低 → CloudFront Function 规范化查询参数。（例题：#292 #206 #477 #591 #203 #630 #102 #564）
30. **防止绕过 CloudFront 直打源站**：CloudFront 添加自定义源站头（可用 Secrets Manager 轮换），ALB 或 WAF 校验该头；或 ALB 安全组只放行 CloudFront 托管前缀列表。S3 源 → OAC。（例题：#159 #625 #195 #536）
31. **限制组织内行为 = SCP 条件键**：限区域 → aws:RequestedRegion；限实例类型 → ec2:InstanceType；必须带标签 → aws:RequestTag 为空则拒绝；禁止公网 IP → 拦截相关启动参数。SCP 不授权，记得 IAM 侧还要给权限。（例题：#169 #601 #517 #165 #142 #161）
32. **自助开通但要受控 = Service Catalog**：“让团队自助启动，但只能用批准的配置/规格/标签”→ Service Catalog 产品 + 启动约束（以服务角色代为部署）+ TagOption。（例题：#85 #173 #472 #614 #128）
33. **待核验题：背思路，不背字母**：题库约 115 题标了“待核验”，原答案可能有误。刷这些题时看“核验备注”，按正确的技术逻辑判断；考场上同类题以技术正确为准。冲刺阶段可以先刷可靠题，最后再看待核验题。（例题：#1 #93 #80 #151）

## 四、从提纲入手

### 领域 1：复杂组织的解决方案设计（26%）

题库主题：安全与权限、网络与连接、部署与治理（组织部分）

1. 先判断题目是“管人”（身份与权限）、“管账户”（组织与治理）还是“管网络”（多 VPC 与混合连接）。
2. 管人：员工登录 → Identity Center（+ 外部 IdP/AD）；跨账户 → 角色 + 信任策略；第三方 → ExternalId；限制 → SCP / 权限边界。
3. 管账户：建多账户 → Control Tower；批量部署 → StackSets；统一安全 → 委托管理员 + Security Hub/GuardDuty；统一防护 → Firewall Manager；统一日志 → 组织 Trail。
4. 管网络：互通 → TGW；暴露服务 → PrivateLink；共享 → RAM；混合 → DX/VPN + DX Gateway；DNS → Resolver 端点；集中出网/检查 → 出口 VPC、Network Firewall、GWLB。

代表题：#63 #622 #101 #657 #130 #176 #364 #201

### 领域 2：新解决方案设计（29%）

题库主题：弹性与性能、高可用与灾备、数据存储与分析

1. 先定 RPO/RTO 和可用性级别，再选 DR 档位：备份还原 → 指示灯 → 温备 → 多站点。
2. 再定数据层：关系型 → Aurora（全局 → Aurora Global）；键值大规模 → DynamoDB（多区域写 → 全局表）；文件 → EFS/FSx；对象 → S3。
3. 再定计算：短任务事件驱动 → Lambda；长任务 → Fargate / Batch / Step Functions 编排；需要 OS 控制 → EC2 + ASG。
4. 最后补韧性：解耦（SQS/SNS/EventBridge）、缓存（CloudFront/ElastiCache/DAX）、多 AZ、健康检查与故障转移。

代表题：#301 #189 #545 #513 #328 #527 #588 #207

### 领域 3：现有解决方案的持续改进（25%）

题库主题：成本与计费、弹性与性能、部署与治理

1. 题目会先描述“现状 + 痛点”，痛点就是考点：慢、贵、宕机、发布难、不合规。
2. 慢 → 缓存/读副本/扩缩/边缘；贵 → 规格优化/购买方式/存储分层/去 NAT；宕机 → 多 AZ/ASG/健康检查；发布难 → CI/CD 蓝绿金丝雀；不合规 → Config + 自动修复、Control Tower 控制。
3. 改进题偏好“最小改动”：在现有架构上加组件（Proxy、缓存、端点、ASG），而不是推倒重来。

代表题：#349 #139 #240 #72 #297 #26 #405

### 领域 4：加速工作负载迁移与现代化（20%）

题库主题：迁移与混合架构、数据存储与分析（迁移部分）

1. 先看阶段：评估（Migration Evaluator / Discovery）→ 选策略（7R）→ 搬迁（MGN / DMS / DataSync / Snowball）→ 现代化（容器化、无服务器、托管库）。
2. 选策略看约束：时间紧、不改代码 → Rehost（MGN）；想省许可费、少运维 → Replatform（RDS/Aurora/Babelfish）；要弹性和敏捷 → Refactor（Lambda/容器/绞杀者模式）。
3. 数据库迁移永远是：（异构先 SCT）+ DMS 全量 + CDC，追平后切 DNS/CNAME。

代表题：#401 #470 #609 #491 #244 #325 #512 #581

## 五、从产品入手：易混产品对决表

| 对决 | 怎么选 | 题库证据 |
| --- | --- | --- |
| PrivateLink vs VPC 对等 | CIDR 重叠、单向暴露服务、大量消费者 → PrivateLink；少量 VPC 全网段互通 → 对等。 | 同题对决：PrivateLink 胜 5，对等胜 0；#661 #205 |
| Transit Gateway vs VPC 对等 | VPC 多、要传递路由、要分段隔离 → TGW。对等不支持传递路由。 | #130 #384 |
| Global Accelerator vs CloudFront | 非 HTTP（TCP/UDP）、固定 IP、秒级区域切换 → Global Accelerator；HTTP 缓存/静态内容 → CloudFront。 | 同题对决：Global Accelerator 胜 5，CloudFront 胜 1；#109 #483 #203 |
| Global Accelerator vs Route 53 故障转移 | 要快速切换且不受 DNS 缓存影响 → Global Accelerator；成本敏感、可接受 TTL → Route 53。 | 同题对决：Global Accelerator 胜 3，Route 53 胜 1；#483 #626 |
| Secrets Manager vs Parameter Store | 需要自动轮换、跨区复制 → Secrets Manager；普通配置 → Parameter Store。 | 同题对决：Secrets Manager 胜 4，Parameter Store 胜 1；#174 #510 #309 |
| AWS Backup vs 手动快照/脚本 | 统一计划、跨账户/跨区域复制、保留策略、Vault Lock → AWS Backup。 | 同题对决：Backup 胜 5，快照胜 0；#150 #553 #637 |
| DMS vs DataSync | 数据库（含持续 CDC）→ DMS；文件/对象 → DataSync。 | 同题对决：DMS 胜 4，DataSync 胜 0；#325 #231 |
| DataSync vs Snowball | 带宽够、需持续/增量同步 → DataSync；带宽 ÷ 数据量超出期限 → Snowball。 | 同题对决：DataSync 胜 3，Snowball 胜 1；#340 #91 |
| Fargate vs EC2 | 不想管主机 → Fargate；需要 GPU、自定义 AMI/代理、主机级控制 → EC2 启动类型。 | 同题对决：Fargate 胜 10，EC2 胜 5；#460 #106 #489 |
| Lambda vs Fargate / Batch | 15 分钟以内、事件驱动 → Lambda；超过 15 分钟或需要容器长跑 → Fargate / Batch，由 EventBridge 或 Step Functions 触发。 | #47 #485 #513 |
| Step Functions vs Lambda 互相调用 | 多步骤编排、等待、重试、人工审批 → Step Functions（回调 Task Token）。函数套函数是反模式。 | #328 #186 #560 |
| SQS vs Kinesis | 解耦削峰、每条消息独立处理 → SQS；有序流、多消费者、可重放 → Kinesis。 | 同题对决：Kinesis 胜 5，SQS 胜 3；#110 #624 #535 |
| EventBridge vs SNS | 基于内容的规则路由、跨账户事件总线、SaaS 事件源 → EventBridge；简单扇出推送 → SNS。 | 同题对决：EventBridge 胜 4，SNS 胜 2；#464 #82 #358 |
| Aurora vs RDS | 更快故障转移、更多副本、全局数据库、Serverless 弹性 → Aurora。 | 同题对决：Aurora 胜 16，RDS 胜 10；#349 #301 |
| Aurora Global Database vs 跨区域只读副本 | RPO 约 1 秒、RTO 约 1 分钟 → Aurora Global；RPO/RTO 为分钟级且是 RDS → 跨区域只读副本提升。 | #301 #189 #58 #502 |
| Athena vs Redshift / EMR | 偶尔查询、按需付费、S3 上的数据 → Athena；常驻复杂分析 → Redshift（或 Redshift Serverless）；大规模 Spark → EMR。 | 同题对决：Athena 胜 5，Redshift 胜 1；#454 #230 |
| SCP vs IAM 策略 | 组织范围、账户管理员也不能绕过 → SCP；单账户内授权 → IAM。 | 同题对决：SCP 胜 8，IAM 策略胜 4；#142 #169 #181 |
| WAF vs Shield | SQL 注入、XSS、限速、地理封禁 → WAF；大规模 DDoS 与成本保护 → Shield Advanced。 | 同题对决：WAF 胜 4，Shield 胜 0；#221 #267 #222 |
| EFS vs FSx | Linux NFS 共享 → EFS；Windows/SMB/AD → FSx for Windows；HPC → FSx for Lustre；多协议/NetApp → FSx for ONTAP。 | #209 #498 #177 #212 |
| ElastiCache vs DAX | DynamoDB 读加速且不改访问方式 → DAX；会话、排行榜、通用缓存 → ElastiCache Redis。 | #477 #141 #292 |
| ALB vs NLB | HTTP 路由、认证、WAF → ALB；TCP/UDP、固定 IP、PrivateLink 服务端 → NLB。 | 同题对决：ALB 胜 6，NLB 胜 3；#467 #255 #205 |

## 六、数字速记

| 项目 | 数值 |
| --- | --- |
| Lambda 最长运行 | 15 分钟 |
| Lambda 同步请求负载 | 6 MB |
| SQS 可见性超时最大 | 12 小时 |
| SQS 消息保留 | 最长 14 天 |
| Step Functions 标准 / 快速 | 1 年 / 5 分钟 |
| Aurora Global Database | 复制延迟 < 1 秒，切换约 1 分钟，最多 5 个次要区域 |
| Aurora / RDS 只读副本 | 15 个 / 15 个（RDS MySQL 等） |
| S3 Glacier Deep Archive 取回 | 12–48 小时 |
| S3 Glacier Flexible 取回 | 分钟（加急）到 12 小时 |
| S3 Standard-IA / Glacier 最短存储时长 | 30 天 / 90 天（Deep Archive 180 天） |
| S3 RTC 复制时间控制 | 99.99% 对象 15 分钟内复制 |
| Snowball Edge 存储优化 | 约 80 TB 可用 |
| Spot 中断通知 | 2 分钟 |
| Route 53 多值应答 | 最多 8 条健康记录 |
| DX 最高弹性 | 两个 DX 位置 × 各两条连接 |
| 带宽算术 | 1 Gbps 满速约 10 TB/天；100 Mbps 约 1 TB/天 |

## 七、高频陷阱清单

- SCP 不授予权限，也不影响管理账户；“明明允许却被拒绝”先查 SCP 和权限边界。
- DAX 只加速读，不能解决写入容量不足。
- Glacier Deep Archive 不能满足分钟级恢复；Instant Retrieval 才是毫秒级。
- 跨区域只读副本是异步复制，不能保证“零数据丢失”。
- CloudFormation DeletionPolicy 不会帮你清空 S3 桶；删除非空桶需要自定义资源先清对象。
- Organizations 只开“整合账单”时不能用 SCP，必须启用“所有功能”。
- EFS/S3 冷存储层有最短存储时长，短保留期盲目转冷反而更贵。
- ALB 不支持 UDP，也不能直接接原生 MQTT；UDP 用 NLB。
- 路由表没有“拒绝”规则；要按 IP 阻断用 NACL 或 WAF。
- Gateway Endpoint 不能被本地网络或对等 VPC 使用；本地访问 S3 私网要接口端点。
- VPC 对等不支持传递路由，CIDR 不能重叠。
- Lambda 放进 VPC 后访问公网需要 NAT；访问 DynamoDB/S3 可用网关端点。
- Server Migration Service 已停用，Rehost 选 Application Migration Service（MGN）。
- 成本分配标签必须在管理账户中激活才会出现在账单报表里。

## 八、冲刺计划

- **第 1 轮：只看抓手（快）**：在“真题库”里用背题模式按主题刷，每题只读“题干抓手 → 答案联想”，不读全文。目标是建立“场景 → 服务”的反射，683 题可以很快过完一遍。
- **第 2 轮：练习模式 + 四步审题法**：按主题做练习，每题强迫自己先说出问句标准和硬约束再看选项。错题自动进错题本。
- **第 3 轮：只刷错题和待核验题**：错题按妙招归类（每条妙招下有例题号），看自己是哪一类坑反复踩。待核验题看备注，理解正确的技术逻辑。
- **考前一天**：只看本页：四步审题法、对决表、数字速记、陷阱清单，再用模拟测验热身。
