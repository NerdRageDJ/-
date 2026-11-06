# SAP-C02 关键词 + 正确选项速记

> 由 `tools/gen-recall-doc.js` 根据题库生成。格式：题号｜题干关键词 → 答案关键词，下面是正确选项原文。标“待核验”的题原答案可能有误。

## 单选（548 题）

### 数据存储与分析

**#3｜查EC2连了谁并把记录送Splunk** → VPC流日志进CloudWatch，经订阅和Firehose送Splunk，Lambda拆日志　〔区分词：Logs〕

- B：创建一个 Amazon Kinesis Data Firehose 交付流，以 Splunk 作为目标。配置一个预处理的 AWS Lambda 函数，使用 Kinesis Data Firehose 流处理器从 CloudWatch Logs 订阅过滤 器发送的记录中提取单个日志事件。启用 VPC 流日志，并将其发送到 CloudWatch。创建 一个 CloudWatch Logs 订阅，将日志事件发送到 Kinesis Data Firehose 交付流。

**#8｜一个API客户猛发PUT且允许重试** → 使用计划按API Key限流，客户端接住429再重试　〔区分词：429〕

- B：通过 API 网关级别的使用计划实施 API 限流。确保客户端应用程序能够处理代码 429 的回复而不出错。

**#9｜一次性售票日期已知且数据库也要变大** → EC2计划扩容，Aurora先建大副本再切主，活动后缩回

- D：为 EC2 实例使用计划扩展策略。将数据库托管在 Amazon Aurora PostgreSQL 多可用区数据库集群上。创建一个 Amazon EventBridge 规则，调用一个 AWS Lambda 函数，在销售事件之前创建一个更大的 Aurora 副本。故障转移到更大的 Aurora 副本。 创建另一个 EventBridge 规则，调用另一个 Lambda 函数，在销售事件后缩减 Aurora 副本。

**#11｜隔离网络的SageMaker要访问私有Git** → 题库记Git登记资源、Secrets Manager存凭据，网络路径须核验　〔区分词：Secrets Manager〕（待核验）

- A：通过引用远程 URL 将 Git 仓库添加为 SageMaker 的资源。配置 AWS Secrets Manager 使用 Git 凭据访问该仓库。

**#13｜用户资料配4GB视频且不能拖慢数据库** → DynamoDB记档案和S3键，S3装视频，SCT加DMS搬资料

- B：通过使用 AWS DMS 和 AWS SCT 将数据库迁移到 Amazon DynamoDB。将视频作为 对象存储在 Amazon S3 中。将 S3 键存储在相应的 DynamoDB 项中。

**#15｜Lambda暴增把RDS连接挤满** → 加RDS Proxy连接池当统一前台

- C：通过使用 Lambda 控制台创建 RDS 代理。修改 Lambda 函数以使用代理 端点。

**#18｜React加Node加MySQL要少运维迁移** → 网页住S3，API Gateway接Lambda，DMS搬库到Aurora　〔区分词：Aurora〕

- B：使用 AWS 数据库迁移服务（AWS DMS）将数据库迁移到 Amazon Aurora MySQL。将网页文件复制到 Amazon S3 存储桶并设置网页托管。将 API 代码复制到 AWS Lambda 函数。配置 Amazon API Gateway 指向 Lambda 函数。

**#19｜数百账户按OU给团队看成本** → 管理账户出CUR明细，QuickSight画团队账单

- B：从 AWS Organizations 管理账户创建一个 AWS 成本和使用报告（CUR），允许每个团队通 过 Amazon QuickSight 仪表板可视化 CUR。

**#20｜迁移前估算EKS加RDS的TCO** → Migration Evaluator先采集、建场景、出快速洞察

- A：请求访问迁移评估工具。运行迁移评估工具收集器并导入数据。 配置一个场景。从迁移评估工具导出快速洞察报告。

**#26｜一万台EC2代理漏装或配置被改** → SSM文档写标准，State Manager每天纠偏　〔区分词：State〕

- C：创建一个 AWS Systems Manager 文档，定义代理的安装和配置 过程。配置 AWS Systems Manager State Manager 将文档与 EC2 实例关联。按每日计划应用所需状态。

**#27｜FSx用户目录HDD慢且只准维护窗迁移** → DataSync搬到SSD高吞吐新FSx，完成后切DNS别名　〔区分词：EC2、DataSync、Server〕

- C：在新的 Amazon EC2 实例上部署 AWS DataSync 代理。创建一个任务。将现有文件系统 配置为源位置。将新的 FSx for Windows File Server 文件系统配置为目标位置，使用 SSD 存储和 32 MBps 的吞吐量。安排任务。当任务完成后，相应地调整 DNS 别名。删除原始文件 系统。

**#35｜Docker不想管主机又要共享文件** → ECS Fargate管容器，EFS当共享盘

- B：将运行该应用程序的容器迁移到 AWS Fargate for Amazon Elastic Container Service （Amazon ECS）。创建一个 Amazon Elastic File System（Amazon EFS）文件系统。创建一个 Fargate 任务定义。向任务定义添加一个卷，以指向 EFS 文件系统。

**#40｜旧.NET和SQL Server少改代码又降许可费** → EC2加ALB和ASG，数据库换Aurora PostgreSQL加Babelfish　〔区分词：Babelfish、Aurora PostgreSQL〕

- A：在应用程序负载均衡器后面为 Web 层和应用程序层部署 Amazon EC2 实例， 并将其放入自动扩展组中。使用启用 Babelfish 的 Amazon Aurora PostgreSQL 来 重新平台化 SOL Server 数据库。

**#43｜全球海量4KB记录低延迟留120天** → DynamoDB接记录，TTL设120天　〔区分词：DynamoDB、TTL〕

- B：设计应用程序以将每个传入记录存储在适当配置的 Amazon DynamoDB 表中，以满足 规模要求。配置 DynamoDB 的生存时间（TTL）功能，以删除超过 120 天的记录。

**#45｜从SaaS日志找闲置许可证** → AppFabric收日志进S3，Athena查谁没用　〔区分词：AppFabric〕

- C：使用 AWS AppFabric 将 SaaS 应用程序的审计日志导入 Amazon S3。使用 Amazon Athena 分析数据并识别未使用的 SaaS 许可证。

**#46｜每晚200GB导出已有10Gbps专线** → File Gateway提供SMB，经DX把备份写S3　〔区分词：Stor age〕

- A：创建一个新的 S3 存储桶。在与 Direct Connect 连接相连的 VPC 内部署一个 AWS Stor age Gateway 文件网关。创建一个新的 SMB 文件共享。将每晚的数据库导出写入新的 S MB 文件共享。

**#47｜S3偶发上传后要处理25分钟** → S3事件经EventBridge启动ECS Fargate长任务　〔区分词：Fa rgate〕

- A：修改应用程序以接受新的 S3 对象键作为输入。将应用程序容器化。将容器部署到使用 AWS Fa rgate 启动类型的 Amazon ECS 集群。配置 S3 存储桶通知，以便在上传新对象时将事件 发送到 Amazon EventBridge。创建一个 EventBridge 规则，当发生新的 S3 对象事件 时调用 ECS 任务以运行应用程序。

**#53｜指定雷达前缀复制要及时并报警** → 该前缀开S3 RTC，监控复制延迟并用EventBridge告警　〔区分词：RTC〕

- D：在源 S3 存储桶上创建一个新的 S3 复制规则，过滤使用数据最准确的雷达站前缀的键。启用 S3 复制时间控制（S3 RTC）。监控到目标的最大复制时间。创建一个 Amazon EventBridge （Amazon CloudWatch Events）规则，当时间超过所需阈值时触发警报。

**#55｜收购单账户公司要并入组织** → 管理账户邀请、对方接受，再建OrganizationAccountAccessRole　〔区分词：OrganizationAccou ntAccessRole〕

- C：从示例公司的管理 AWS 账户，向 AnyCompany 的 AWS 账户发送邀请。 在 AnyCompany 的账户中接受邀请。创建一个具有适当托管 IAM 策略的 OrganizationAccou ntAccessRole IAM 角色。

**#56｜按BusinessUnit标签分账并画图** → 激活成本标签、CUR落S3、Athena查账、QuickSight画图　〔区分词：BusinessUnit、Athena、QuickS ight〕

- A：在管理账户中激活 BusinessUnit 成本分配标签。创建一个 CUR 到 S3。使用 Athena + QuickS ight 进行报告。

**#62｜MySQL月底报表拖慢且前端已伸缩** → 迁RDS加只读副本分担查询　〔区分词：RDS〕

- B：将数据库集群一次性迁移到 Amazon RDS，并创建几个额外的只读副本以处理月末的负载。

**#68｜图片要自动缩放并最多留六个月** → 题库记S3事件触发Lambda加生命周期，但转IA不能替代删除（待核验）

- C：使用 S3 事件通知在用户存储图像时调用 AWS Lambda 函数。使用 Lambda 函数在原地调整 图像大小，并将原始文件存储在 S3 存储桶中。创建一个 S3 生命周期策略，在 6 个月后将所有 存储的图像移动到 S3 标准-不频繁访问（S3 Standard-IA）。

**#73｜财务报告要500毫秒且高可用** → 题库记DynamoDB存数据加嵌入QuickSight，直查接入须核验　〔区分词：DynamoDB、QuickSight〕（待核验）

- C：使用 Amazon DynamoDB 存储数据，使用嵌入式 Amazon QuickSight 仪表板， 通过直接查询数据集向应用程序提供报告。

**#74｜照片30天后冷热难预测又需毫秒读取** → S3 Intelligent-Tiering自动把冷热分层

- A：在 S3 存储桶上配置 S3 智能分层。

**#78｜无网偏远实验一周6TB且传感器只会FTP** → Snowcone上跑Linux FTP收文件，实验完邮寄设备进S3　〔区分词：FTP〕

- C：订购一个 AWS Snowcone 设备，包括一个 Amazon Linux 2 AMI。将设备连接到本地 网络。 在设备上启动一个 Amazon EC2 实例。在 EC2 实例上安装和配置 FTP 服务器。配置传感器 将数据上传到 EC2 实例。实验结束后，将设备归还给 AWS，以便将数据加载到 Amazon S3 中 。

**#79｜新区域数据直写北欧S3延迟高** → 先写各自区域S3，再跨区复制到北欧分析桶

- C：在两个新区域中各创建一个 S3 存储桶。设置每个新区域的应用程序将数据上传到其各自的 S3 存储桶。设置 S3 跨区域复制，将数据复制到 eu-north-1 的 S3 存储桶。

**#80｜SMB灾备文件要求五分钟内可用** → 题库选File Gateway，但图片放Deep Archive达不到五分钟　〔区分词：Glacier〕（待核验）

- C：部署 Amazon S3 文件网关。将 S3 文件网关配置为使用 Amazon S3 标准- 不频繁访问（S3 Standard-IA）存储元数据文件，并使用 S3 Glacier 深度归档存储 图像文件。

**#83｜Java推荐应用加SQL Server要上云** → 模型工件进S3上SageMaker端点，Java住Beanstalk，DMS搬库到RDS　〔区分词：SageMaker、Elastic Beanstalk〕

- B：导出个性化模型。将模型工件存储在 Amazon S3 中。将模型部署到 Amazon SageMaker 并创建一个端点。在 AWS Elastic Beanstalk 中托管 Java 应用程序。使用 AWS 数据库迁移服务（AWS DMS）将 SQL Server 数据库迁移到 Amazon RDS for SQL Server。

**#86｜多EC2共享参考集时EBS并发访问出磁盘错误** → 共享文件改用EFS，但题库“基于S3的EFS卷”表述须核验　〔区分词：EFS〕（待核验）

- C：将所有参考数据移动到 Amazon S3 存储桶。创建一个基于 Amazon S3 的多可用区 Amazon EFS 卷。在 EC2 实例上挂载 EFS 卷。用 EFS 挂载点替换 EBS 挂载点。

**#87｜切换前本地NFS新增图像要持续复制到EFS** → 本地DataSync代理经DX私网同步到EFS　〔区分词：Conne ct、PrivateLink int〕

- D：将 AWS DataSync 代理部署到一个可以访问 NFS 文件系统的本地服务器。通过 Direct Conne ct 连接将数据发送到 AWS PrivateLink int

**#88｜跨区S3按前缀看一年存储和复制趋势** → Storage Lens开高级指标及分组，导出S3后Athena加QuickSight做长周期分析

- B：创建一个 S3 存储透镜仪表板。启用高级指标和建议。创建存储透镜组并为指定前缀配置过滤 器。将组附加到仪表板。 配置存储透镜指标以导出到一个 S3 存储桶。使用 Amazon Athena 查询指标。 使用 Amazon QuickSight 生成自定义分析的可视化。

**#93｜文件处理容器最长跑两小时却要去EC2** → 题库选Lambda容器但两小时超限，长活应核验Fargate等方案（待核验）

- D：为处理创建 AWS Lambda 容器镜像。配置 Lambda 函数以使用 容器镜像。提取容器选择逻辑以作为决策 Lambda 函数运行，调用 适当的 Lambda 处理函数。将文件上传的存储迁移到亚马逊 S3 存储桶。更新处理代码以使用亚马逊 S3。配置 S3 事件通知，以在对象创建时调用 决策 Lambda 函数。

**#94｜S3偶发上传后要跑25分钟自定义处理** → EventBridge按上传事件启动ECS Fargate　〔区分词：Fargate〕

- A：ECS 在 Fargate 上由 EventBridge 触发

**#100｜Oracle迁移后要空间数据定时维护和查本地外表** → SCT加DMS搬到RDS PostgreSQL，空间扩展加任务调度，经DX访问本地　〔区分词：PostgreSQL、Direct Connect〕

- D：创建一个 Amazon RDS for PostgreSQL 数据库实例。使用 AWS SCT 和 AWS DMS 将数据 从本地迁移到数据库实例。使用 PostgreSQL 原生空间数据支持。在 数据库实例上运行定时任务进行维护。使用 AWS Direct Connect 将数据库实例连接到本地 环境以支持外部表。

**#106｜容器节点必须安装专有安全代理** → EKS托管节点组用自定义AMI预装代理，DMS搬MySQL到多AZ RDS　〔区分词：EKS、Kubernetes pod〕

- B：创建一个配置有托管节点组的 Amazon EKS 集群。使用一个自定义 AMI，该 AMI 已预装专有安全代理软件。将网站服务作为 Kubernetes pod 部署。 通过使用 AWS DMS 将 MySQL 数据库数据迁移到 Amazon RDS for MySQL DB 实例。 为 RDS DB 实例配置 Multi-AZ 部署。

**#108｜.NET Core要自控主机并异步通信和关系库** → ECS选EC2启动型，SQS接消息，题库数据库选Aurora MySQL Serverless v2　〔区分词：EC2、MySQL、mazon SQS〕

- D：在亚马逊弹性容器服务（Amazon ECS）上使用亚马逊 EC2 启动类型托管 .NET Core 组 件。将数据库托管在亚马逊 Aurora MySQL Serverless v2 上。使用亚马逊简单队列服务（A mazon SQS）进行异步消息传递。

**#110｜促销写入突发且提交不能丢又不改数据模型** → SQS先接住提交，Lambda再写原关系库　〔区分词：SQS、Lambda〕

- B：使用 Amazon SQS 来解耦应用程序和数据库层。配置一个 AWS Lambda 函数，将队列中的项 目写入数据库。

**#115｜EC2访问本地数据库连接记录要进Splunk** → VPC流日志进CloudWatch，经订阅到Firehose，Lambda拆包送Splunk　〔区分词：Logs〕

- B：创建一个 Amazon Data Firehose 交付流，以 Splunk 作为目标。配置一个预处理的 AWS Lambda 函数，使用 Firehose 流处理器从 CloudWatch Logs 订阅过滤器发送的记录中提取 单个日志事件。启用 VPC 流日志并将其发送到 CloudWatch。创建一个 CloudWatch Logs 订阅，将日志事件发送到 Firehose 交付流。

**#119｜SFTP后还要转换文件再发队列** → Transfer Family落S3，上传触发Glue转换后发SQS

- C：配置 Transfer Family 使用 Amazon S3 存储。在 S3 事件通知后使用 AWS Glue 执行转换。 配置 AWS Glue 在文件转换后向 Amazon SQS 队列发送消息。

**#123｜所有新旧RDS和DynamoDB都要成本中心项目号** → 旧资源Tag Editor补签，激活成本标签，新建用SCP约束请求标签　〔区分词：SCP〕

- C：使用标签编辑器为现有资源打标签 创建成本分配标签以定义成本中心和项目 ID 使用 SCP 限制未在资源上包含成本中心和项目 ID 的资源创建。

**#124｜各厂商IoT格式不同又要快速低成本分析** → IoT Core接入，Lambda转格式落S3，Glue编目，Athena加QuickSight分析　〔区分词：IoT Core、Lambda、mazon QuickSight〕

- A：将物联网传感器连接到 AWS IoT Core。设置规则以调用 AWS Lambda 函数来解析信息并将 . csv 文件保存到 Amazon S3。使用 AWS Glue 对文件进行目录编制。使用 Amazon Athena 和 A mazon QuickSight 进行分析。

**#131｜认证用户用预签名上传大图太慢** → 传输加速端点生成预签名，浏览器再用分段上传

- C：在 S3 存储桶上启用 S3 传输加速端点。在生成预签名 URL 时使用该端点。让浏览器界面使用 S3 分段上传 API 将对象上传到此 URL。

**#136｜恒定流数据夜间四小时统计且失败可重跑** → Firehose落S3，夜间Batch用Spot跑完即停

- B：更新数据摄取过程，使用 Amazon Kinesis Data Firehose 将数据保存到 Amazon S3。使用 AWS Batch 和 Spot 实例进行每晚处理，最大 Spot 价格为按需价格的 50%。

**#146｜自管Kubernetes加PostgreSQL整体迁云** → 镜像进ECR，清单上EKS托管节点，数据库用Aurora PostgreSQL　〔区分词：EKS〕

- B：创建一个具有托管节点组的 Amazon EKS 集群。将应用程序容器复制到新的 Amazon ECR 存储库。将清单从本地部署到 EKS 集群。创建一个 Amazon Aurora PostgreSQL 数据库集群。

**#150｜二十台持久EC2允许丢一天并跨区恢复** → Backup每日备份跨区复制，灾时CloudFormation建网再恢复　〔区分词：Backup〕

- C：使用 AWS Backup 为 EC2 实例创建计划的每日备份计划。配置备份任务将备份 复制到第二个区域的保险库。在发生故障时，启动 CloudFormation 模板，从备份保险库恢复实例卷和配置，并将使用转移到第二个区域。

**#151｜关系型Fargate应用要跨区恢复并零数据丢失** → 题库记Aurora跨区副本，但异步复制不保证零丢失　〔区分词：Aurora〕（待核验）

- A：在不同区域中配置一个 Aurora 副本。

**#157｜每小时百万小对象且S3留五年DynamoDB留十五天** → Firehose聚合压缩，计算买节省计划，S3归档五年过期，DynamoDB TTL十五天　〔区分词：hose、gzip、Glacier〕

- C：创建一个亚马逊数据火hose流以接收数据。配置缓冲区以每分钟将消息以 gzip 格式传递到 Amazon S3。根据使用 建议购买计算节省计划。创建 S3 生命周期规则，将 S3 对象在 1 天后移动到 S3 Glacier Deep Archive，并在 5 年后使对象过期。为 DynamoDB 表配置 15 天的 TTL。

**#171｜旧Linux应用只会文件访问还要快速导出S3** → 题库记FSx for Lustre连S3导入导出，用Lustre客户端挂载　〔区分词：FSx、Lustre、L ustre〕（待核验）

- C：配置 Amazon FSx for Lustre，设置导入和导出策略。将新文件系统链接到 S3 存储桶。安装 L ustre 客户端，并通过使用 NFS 将文档存储挂载到 Amazon EC2 实例。

**#180｜200TB共享数据每月只需高性能跑72小时** → 常态放S3智能分层，跑前建Lustre懒加载，跑完导出再销毁　〔区分词：Amazo n〕

- A：将数据从现有的共享文件系统迁移到使用S3智能分层存储类的Amazon S3桶。在每个 月的作业运行之前，使用Amazon FSx for Lustre创建一个新的文件系统，使用懒加载从Amazo n S3中获取数据。在作业运行期间，将新文件系统用作共享存储。作业完成后删除该文件系 统。

**#182｜旧手持设备只会FTP且收件归档易丢** → Transfer Family FTP落S3，事件经SNS触发Lambda补元数据和更新状态　〔区分词：Amaz、SNS、Lam bda〕

- C：使用 AWS Transfer Family 创建一个 FTP 服务器，将文件放置在 Amazon S3 中。通过 Amaz on 简单通知服务（Amazon SNS）使用 S3 事件 通知来调用 AWS Lambda 函数。配置 Lam bda 函数以添加元数据并更新交付系统。

**#184｜万台水位传感器不能再靠单机Kafka转换** → IoT Core接入，Firehose加Lambda转列式文件入S3，Athena查询

- B：将传感器数据发送到亚马逊 Kinesis Data Firehose。使用 AWS Lambda 函数读取 Kinesis Data Firehose 数据，将其转换为 Apache Parquet 格式并保存到亚马逊 S3 存储桶中。 指示数据分析师使用亚马逊 Athena 查询数据。

**#188｜容器应用跨区灾备要求最快恢复** → 备用区预建ECS，RDS跨区副本，事件触发提升数据库再改Route 53

- C：在单独的区域中设置第二个 ECS 集群和 ECS 服务。创建一个跨区域的 RDS 数据库实例的只读副本。创建一个 AWS Lambda 函数以 将只读副本提升为主数据库。配置 Lambda 函数以更新 Route 53 以 将流量路由到第二个 ECS 集群。更新 EventBridge 规则以添加一个目标，该目标将调用 Lambda 函数。

**#192｜订单应用要低运维解耦且保留失败订单** → S3托管网页、AppSync供API、SQS排队、Lambda处理、DLQ留失败　〔区分词：Queue、Lambda〕

- C：使用 Amazon S3 进行网站托管，结合 AWS AppSync 提供数据库 API 服务。使用 Amazon Simple Queue Service (Amazon SQS) 进行订单排队。使用 AWS Lambda 处理业务逻辑，并使用 Amazon SQS 死信队列保留失败的订单。

**#203｜5GB游戏包全球下载要快且省传输** → 文件存S3，CloudFront边缘分发，Route 53挂下载域名　〔区分词：CloudFront〕

- C：配置 Amazon Route 53 和一个用于网站托管的 Amazon S3 存储桶。将游戏文件上传到 S3 存储桶。使用 Amazon CloudFront 进行网站发布。发布游戏下载 URL 供用户下载该包。

**#204｜长期空闲后突发的Lambda和Fargate配Aurora** → 题库记Serverless数据库随负载伸缩，稳定计算才考虑节省计划　〔区分词：Serverless v1〕（待核验）

- D：将数据库迁移到 Aurora Serverless v1。购买计算节省计划。

**#206｜三层应用容器化还要跨实例共享与会话持久** → EKS托管节点跑容器，DynamoDB存会话，EFS存共享文件　〔区分词：DynamoDB、Am azon〕

- D：在亚马逊弹性 Kubernetes 服务（Amazon EKS）上部署应用程序。配置 Amazon EKS以使用 托管节点组。将 Web 服务器和应用程序作为 Kubernetes 部署在 EKS 集群中运行。将前端 Web 服务器会话数据存储在亚马逊 DynamoDB 表中。创建一个亚马逊弹性文件系统（Am azon EFS）卷，所有应用程序将在部署时挂载。

**#209｜EKS多AZ的Pod都要读写小文件且备份一年** → EFS多AZ挂载共享，Backup保留一年　〔区分词：EFS、Backup〕

- A：创建一个 Amazon 弹性文件系统（Amazon EFS）文件系统，并为每个包含 EKS 集群节点的 子网创建一个挂载目标。配置 ReplicaSet 以挂载文件系统。指示应用程序将文件存储在文 件系统中。配置 AWS Backup 以备份并保留数据的副本 1 年。

**#212｜EKS分析要多协议共享并自动进出数据** → FSx ONTAP作持久卷，DataSync搬原始数据入、结果到S3

- C：使用 AWS DataSync 将原始数据复制到 Amazon FSx for NetApp ONTAP。在 Amazon EKS 上将 FSx for NetApp ONTAP 挂载为卷。使用 DataSync 将处理后的数据从 FSx for NetApp ONTAP 复制到 Amazon S3。

**#220｜删旧CloudFormation堆栈被非空S3挡住** → 自定义资源Lambda在删除时先清桶再让堆栈删桶　〔区分词：DependsOn〕

- A：创建一个 Lambda 函数以从 S3 存储桶中删除对象。将 Lambda 函数作为自定义资源添加到 CloudFormation 堆栈中，并使用 DependsOn 属性指向 S3 存储桶资源。

**#224｜NFS图像归档要限带宽并只在下班后传** → DataSync设时间和带宽，传S3归档并校验后再清本地　〔区分词：NF S〕

- B：在本地作为 Hyper-V 虚拟机部署 AWS DataSync 代理，配置 DataSync 代理将 文件批次从 NF S 本地服务器复制到 Amazon S3 Glacier 深度归档。成功复制后，从本地存储中删除数据 。

**#231｜退役Solaris NFS要全量加增量且加密校验** → 本地DataSync代理建任务，先全量后增量同步　〔区分词：DataSync〕

- B：配置 AWS DataSync。配置 DataSync 代理并将其部署到本地网络。创建一个 传输任务并开始传输。

**#234｜重要文档要高持久并公司控钥和全程加密** → S3存文档，桶策略强制HTTPS和SSE-KMS，客户密钥定期轮换　〔区分词：HTTPS〕

- B：使用 Amazon S3 和存储桶策略强制对存储桶的连接使用 HTTPS，并强制 服务器端加密和 AWS KMS 进行对象加密。

**#241｜跨区域S3桶数和加密对象比例要仪表板** → S3 Storage Lens默认仪表板看存储与保护指标

- C：使用 S3 存储透镜默认仪表板来跟踪存储桶和加密指标。直接在 S3 控制台中给予合规团队访问 仪表板的权限。

**#245｜扫描表单人工录入要自动化** → Step Functions编排，Textract读表单，Comprehend分析，再Lambda调目标API　〔区分词：Textract、Comprehend〕

- D：扩展系统，增加一个使用 AWS Step Functions 和 AWS Lambda 的应用层。配置 该层使用 Amazon Textract 和 Amazon Comprehend 对上传的表单执行光学字符识别 (OCR)。将输出存储在 Amazon S3 中。通过提取应用层所需的数据来解析此输出。将数据提交到目标系统的 API。 将输出存储在 Amazon S3 中。通过提取应用层所需的数据来解析此输出。将数据提交到目 标系统的 API。

**#246｜预签名下载报告却被公开ACL泄露** → S3 Block Public Access开启IgnorePublicAcls，保留签名下载流程　〔区分词：IgnorePublicAcls、TRUE〕（待核验）

- D：在 Amazon S3 中使用阻止公共访问功能，将存储桶的 IgnorePublicAcls 选项设置为 TRUE。

**#247｜Redshift数据出售需先验订阅者并更新交付** → 结果进S3，用AWS Data Exchange发布并开启订阅验证

- C：定期将数据从 Amazon Redshift 表下载到 Amazon S3 存储桶。使用 AWS 数据交换的 S3 与 客户共享数据。配置订阅验证。要求数据客户订阅该数据产品。

**#248｜120台各式VMware加10TB NFS一起迁** → Application Migration Service复制虚机，DataSync经DX把NFS搬到EFS　〔区分词：VMware〕

- B：配置 AWS 应用迁移服务与 VMware 集群的连接。为虚拟机创建一个 复制任务。创建一个 Amazon 弹性文件系统（Amazon EFS）文件系统。 配置 AWS DataSync 将 NFS 服务器数据通过 Direct Connect 连接复制到 EFS 文件系统。

**#251｜CloudFormation不能删非空S3** → Delete策略不会自动清对象，仍要清桶或保留桶　〔区分词：DeletionPolicy、Delete〕（待核验）

- D：修改 CloudFormation 堆栈，以将 DeletionPolicy 属性附加到 S3 存储桶，值为 Delete。

**#258｜Oracle上云仍需空间数据及查询本地外表** → SCT加DMS到RDS PostgreSQL，FDW查本地，DX保网络　〔区分词：PostgreSQL、DMS、Direct Connect〕

- D：使用 RDS for PostgreSQL 和 DMS 及 SCT。使用 PostgreSQL 外部数据包装器。通过 Direct Connect 连接。

**#261｜每天同样量WAF日志但Athena越查越慢** → Firehose和表按日期分区，查询只扫相关日期　〔区分词：Athena、At hena〕

- D：修改 Kinesis Data Firehose 配置和 Athena 表定义，以按日期和时间对数据进行分区。更改 At hena 查询以查看相关分区。

**#266｜Lambda高峰太多连接压慢MySQL** → 迁Aurora加副本，RDS Proxy池化连接　〔区分词：Proxy〕

- D：将数据库迁移到 Amazon Aurora 并添加一个 Aurora 副本。配置 Amazon RDS Proxy 以 管理数据库连接池。

**#269｜没有SSH密钥又要不停机备份EBS文件到S3** → 实例加写S3角色，用SSM Session Manager进机复制

- A：将一个具有写入 Amazon S3 权限的角色附加到实例上。使用 AWS 系统管理器 会话管理器选项访问实例并运行命令将数据复制到 Amazon S3 中。

**#273｜RDS故障转移后应用不重启连不回来** → 改连RDS Proxy端点，让代理接管后端连接

- B：创建一个 RDS 代理。将现有的 RDS 端点配置为目标。更新应用程序中的连接设置 以指向 RDS 代理端点。

**#279｜所有现有未来ECR只准同组织主体访问** → 题库记根级RCP用PrincipalOrgID限组织，须核验服务支持　〔区分词：RCP、aws:PrincipalOrgID〕（待核验）

- B：将一个资源控制策略 (RCP) 附加到组织根，仅在 aws:PrincipalOrgID 条件与公司的组织 ID 匹配时允许访问 ECR。

**#281｜Aurora要同区跨账户迁移并少停机** → 新账户建Aurora，DMS全量加持续复制后切DNS　〔区分词：DMS〕

- B：在新的 AWS 账户中创建一个 Aurora 数据库集群。使用 AWS 数据库迁移服务（AWS DMS） 在两个 Aurora 数据库集群之间迁移数据。

**#282｜美东私有应用要加密访问香港数据中心** → VPC挂TGW，TGW接Site-to-Site VPN，客户网关加载配置　〔区分词：V PN〕

- A：创建一个传输网关。将传输网关附加到位于 us-east-1 的 VPC。创建一个 AWS 站点到站点 V PN 连接。指定传输网关作为目标网关。下载配置文件并设置客户网关设备。

**#285｜WorkSpaces配置文件FSx磁盘满了** → 扩FSx容量，再监控剩余空间由事件触发Lambda自动扩　〔区分词：update-file-system、EventBridge、Lambda〕

- B：通过使用 update-file-system 命令来增加容量。实施一个 Amazon CloudWatch 指标来监控可 用空间。使用 Amazon EventBridge 调用 AWS Lambda 函数，根据需要增加容量。

**#287｜Lambda每发新版都得改客户端ARN** → 客户端固定用Alias ARN，测试后只移动别名指针　〔区分词：ARN〕

- D：创建一个 Lambda 函数别名。修改客户端应用程序以使用函数别名 ARN。 重新配置 Lambda 别名以指向函数的新版本，当公司完成 测试时。

**#292｜RDS会话读写拖慢Web** → 把会话搬ElastiCache Redis内存层　〔区分词：ElastiCache、Redis〕

- D：使用ElastiCache for Redis来存储会话。

**#297｜单机应用CPU满且手补丁常宕机** → 烘SSM AMI，ALB后小实例ASG按CPU伸缩，数据库换Aurora　〔区分词：SSM Agent、Aurora MySQL〕

- D：创建一个配置了 AWS 系统管理器代理（SSM Agent）的新 AMI。使用新的 AMI 创建一个自 动扩展组的启动模板。在自动扩展组中使用更小的实例。创建一个应用负载均衡器，以在自 动扩展组中的实例之间分配流量。设置自动扩展组以根据 CPU 利用率进行扩展。将数据库迁移 到 Amazon Aurora MySQL。

**#300｜处理引擎只懂POSIX却要与S3自动进出同步** → FSx for Lustre关联S3并设导入导出，Linux装Lustre客户端　〔区分词：FSx、Lustre〕

- B：配置一个与 S3 存储桶关联的 Amazon FSx for Lustre 文件系统的导入和导出策略。在 EC2 实 例上安装 Lustre 客户端并挂载文件系统。

**#311｜视频分类不想管EC2和第三方识别软件** → 网页视频进S3，事件进SQS，Lambda调用Rekognition分类　〔区分词：Amazo n〕

- C：在 Amazon S3 中托管 web 应用程序。将上传的视频存储在 Amazon S3 中。使用 S3 事 件通知将事件发布到 SQS 队列。使用 AWS Lambda 函数处理 SQS 队列，该函数调用 Amazo n Rekognition API 对视频进行分类。

**#315｜S3费用上升要看一年趋势选存储类** → S3 Storage Class Analysis加QuickSight分析冷热趋势（待核验）

- B：使用 S3 存储类分析。将数据趋势导入 Amazon QuickSight 仪表板以分析 存储趋势。

**#318｜EFS备份冷存储反而更贵** → 记冷存储有最低90天约束，30天短保留不能盲转冷（待核验）

- A：修改备份规则的生命周期配置，以在 1 天后将 EFS 备份移动到冷存储。 将备份保留期限设置为 30 天。

**#319｜怕删CloudFormation堆栈连RDS和EBS数据一起删** → 模板给这些资源设DeletionPolicy Retain　〔区分词：Cloud Formation、DeletionPolicy〕

- A：修改Cloud Formation模板，为RDS资源和EBS资源添加带有保留删除策略的DeletionPolicy 属性。

**#347｜百万CSV每天仅备指定目录到S3** → 本地DataSync代理设过滤器与每日计划，经DX同步　〔区分词：VM〕

- C：将 AWS DataSync 代理安装为在本地虚拟机上运行的 VM。配置 DataSync 任务每天将 数据复制到 Amazon S3。

**#351｜Java加MongoDB不改结构上云要高可用** → Java多AZ EC2 ASG，MongoDB换兼容DocumentDB多AZ

- C：在多个可用区中配置 Amazon DocumentDB（与 MongoDB 兼容），使用适当大小的实例作为 订阅者数据的数据库。在多个可用区中部署 Amazon EC2 实例，作为 Java 后端应用程序的 自动扩展组。

**#352｜全球万用户传图并叠字再发布** → 原图进S3通知SQS，EC2按队列深度扩缩，成品另桶用CloudFront发　〔区分词：SQS〕

- C：将上传的图像存储在 Amazon S3 存储桶中，并配置 S3 存储桶事件通知以向 Amazon 简单 队列服务（Amazon SQS）队列发送消息。创建一组 Amazon EC2 实例，从 SQS 队列中拉取 消息以处理图像，并将其放置在另一个 S3 存储桶中。使用 Amazon CloudWatch 指标监控队 列深度，以扩展 EC2 实例。启用 Amazon CloudFront，并将源配置为包含处理后图像的 S3 存储桶。

**#362｜SMTP模板邮件要迁托管且带客户变量** → SES存模板，Lambda调用SendTemplatedEmail填变量发信　〔区分词：SendTe mplatedEmail〕

- D：设置 Amazon 简单电子邮件服务（Amazon SES）以发送电子邮件消息。将电子邮件模板存储 在 Amazon SES 中，并为客户数据设置参数。创建一个 AWS Lambda 函数来调用 SendTe mplatedEmail API 操作，并传递客户数据以替换参数和电子邮件目标。

**#368｜多Lambda要复用共享库和自定义类** → 应把共享依赖打ZIP做Lambda Layer，原Docker层说法须核验（待核验）

- B：将共享库和自定义类部署到 Docker 镜像中。将镜像上传到 Amazon Elastic Container Registry（Amazon ECR）。创建一个使用 Docker 镜像作为源的 Lambda 层。 将 API 的 Lambda 函数部署为 Zip 包。配置这些包以使用 Lambda 层。

**#379｜S3数据一年后不查但合规永久留** → Glue编目加Athena查询，满一年生命周期转Deep Archive　〔区分词：Glue、Athena〕

- C：使用 AWS Glue 数据目录和 Amazon Athena 查询数据。创建一个 S3 生命周期策略 ，将超过 1 年的数据转移到 S3 Glacier Deep Archive。

**#403｜每天百万小CSV读全表且要留五年降成本** → Glue把小CSV转压缩列式文件，批量合并更利于查询（待核验）

- A：创建一个 AWS Glue 作业，将 .csv 文件转换为 Apache Parquet 格式。使用 Amazon S3 在每次 .csv 文件到达时调用 AWS Glue 作业。

**#406｜容器扩缩和静态共享还被数据库读拖慢** → ECS Fargate自动伸缩，EFS共享静态文件，Aurora Serverless v2加读实例　〔区分词：Auror〕

- D：将应用程序容器化。将应用程序迁移到 Amazon 弹性容器服务（Amazon ECS）集群。对托管 应用程序的任务使用 AWS Fargate 启动类型。为静态内容创建一个 Amazon 弹性文件 系统（Amazon EFS）文件系统。将 EFS 文件系统挂载到每个容器。配置 ECS 集群上的 AWS 应用程序自动扩展，将 ECS 服务设置为 ALB 的目标。将数据库迁移到 Amazon Auror a MySQL 无服务器 v2，并设置一个读取数据库实例。

**#409｜图片本地缓存导致Fargate高峰加载慢** → 预生成各尺寸图放S3，CloudFront图片走S3、动态走ALB　〔区分词：CloudFront、AL B〕

- A：创建一个新的 Amazon CloudFront 分发和一个 Amazon S3 存储桶。将 ALB 设置为分发的一个 源，将 S3 存储桶设置为第二个源。配置一个缓存行为，将图像请求路由到 S3 源，并为 AL B 源配置一个默认缓存行为。预先扩展所有图像并将图像上传到 S3 存储桶。

**#425｜EC2启动下载价格表导致后来价格过期** → 题库用Mountpoint for S3挂桶实时读，需核验缓存刷新语义　〔区分词：AMI〕

- C：将 Amazon S3 的挂载点加载到 EC2 实例的 AMI 中。配置 Amazon S3 的挂载点以挂载 包含定价文件的 S3 存储桶。更新票务服务以指向挂载点和路径以访问 S3 对象。

**#441｜电商高峰冷启动还要省RDS并防SQL注入** → Lambda预置并发、RDS RI保底、CloudFront挂WAF　〔区分词：WAF〕

- D：在高峰期使用具有预配置并发的 Lambda 函数进行计算。对数据库使用 RDS 预留实例。将 AWS WAF 与 CloudFront 集成，以防止 SQL 注入和网络攻击尝试。

**#444｜三层应用不想重写但要少运维** → Python业务容器放ECS Fargate，数据库Aurora，前端是否可静态须核验（待核验）

- A：将用户界面部署到 Amazon S3 上的静态网站 使用 Amazon CloudFront 交付网站 构建 业务逻辑的 Docker 镜像 将镜像存储在 Amazon Elastic Container Registry (Amazon ECR) 中 使用 Amazon Elastic Container Service (Amazon ECS) 和 Fargate 启动类型来托管 前面有应用负载均衡器的网站 将数据层部署到 Amazon Aurora MySQL 数据库集群

**#448｜VPC日志越积越多Athena慢且存储贵** → 流日志改Parquet并按小时分区　〔区分词：VPC、Apache Parquet〕

- C：更新 VPC 流日志配置，以 Apache Parquet 格式存储文件。为日志文件指定每小时 分区。

**#454｜ORC数据只晚上查却常驻EMR太贵** → 数据搬S3，Glue编目，Athena按需SQL　〔区分词：Glue、Athena〕

- B：将数据存储在 Amazon S3 中，使用 AWS Glue 数据目录和 Amazon Athena 查询数据

**#456｜SQL Server要接近零停机迁托管库** → 应优先DMS全量加CDC直达支持目标，原经S3中转须核验　〔区分词：DMS、CDC〕（待核验）

- B：使用 AWS 数据库迁移服务 (AWS DMS) 重新托管数据库。将 Amazon S3 设置为目标。 设置变更数据捕获 (CDC) 复制。当源和目标完全同步时， 将数据从 Amazon S3 加载到 Amazon RDS for Microsoft SQL Server 数据库实例中。

**#469｜本地应用要iSCSI且热数据低延迟并能快照** → Cached Volume Gateway本地留热缓存，Backup备份卷

- C：在缓存模式下配置一个 AWS Storage Gateway 卷网关。使用 AWS Backup 备份卷。

**#484｜博客评论要实时互动少延迟** → AppSync订阅经WebSocket推送新评论　〔区分词：AppSync、WebSockets〕

- C：使用 AWS AppSync 并利用 WebSockets 来传递评论。

**#487｜跨账户迁Lambda和Aurora要少停机** → Aurora可核验跨账户克隆，Lambda代码须重新部署，原RAM共享说法存疑（待核验）

- C：使用 AWS 资源访问管理器 (AWS RAM) 将 Lambda 函数和 Aurora 数据库集群与 Target 账户 共享。授予 Target 账户克隆 Aurora 数据库集群的权限。

**#488｜OpenSearch数据只读一个月又须留原始副本** → 两热节点配UltraWarm做只读，S3原数据满月归Deep Archive

- B：将集群中的数据节点数量减少到 2 个，添加 UltraWarm 节点以处理预期的容量。配置索 引以在 OpenSearch Service 吸收数据时转换为 UltraWarm。 通过使用 S3 生命周期策略，在 1 个月后将输入数据转换为 S3 Glacier Deep Archive。

**#494｜旧堆栈非空S3导致CloudFormation删除失败** → 自定义Lambda先清对象，依赖桶资源保证删除顺序　〔区分词：DependsOn〕

- A：创建一个 Lambda 函数以从 S3 存储桶中删除对象。将 Lambda 函数作为自定义资源添加到 CloudFormation 堆栈中，并使用 DependsOn 属性指向 S3 存储桶资源。

**#498｜Windows多实例共享内容必须即时一致且保AD ACL** → FSx Windows集中存文件，三AZ ASG挂盘并自动加入AD　〔区分词：Windows、fo r Windows〕

- C：创建一个 Amazon FSx for Windows 文件服务器文件系统。创建一个跨越三个可用区的自动扩 展组，并保持至少三个实例的最小规模。实施一个用户数据 脚本来安装应用程序并挂载 FSx fo r Windows 文件服务器文件系统。执行无缝域加入，将实例加入 AD 域。

**#502｜10TB数据库跨区RPO五分RTO十分** → 跨区RDS读副本预先复制，故障提升为独立主库

- B：在次要区域部署一个带有跨区域只读副本的 Amazon RDS 实例。在发生故障时，将只读副本 提升为主副本。

**#526｜多AZ大数据共享盘要POSIX高吞吐** → EFS Regional共享挂载，题库选Max I/O模式　〔区分词：I/O〕

- D：在最大 I/O 性能模式下使用 Amazon EFS

**#530｜没Java源码只有JAR且月底流量大** → Beanstalk托Tomcat多AZ伸缩，RDS PostgreSQL存数据，ALB和CloudFront接流量　〔区分词：Elastic Beanstalk、RDS、CloudFron t〕

- D：使用 AWS Elastic Beanstalk 在多个可用区中部署具有自动扩展的 Tomcat 服务器。将应用 程序数据存储在 Amazon RDS for PostgreSQL 数据库中。部署 Amazon CloudFron t 和应用程序负载均衡器以应对增加的流量。

**#534｜Lambda和Fargate负载长期空闲后突发且数据库写多** → Aurora Serverless v2随负载变，Compute Savings Plans仅覆盖稳定底座　〔区分词：Serverless v2〕

- D：将数据库迁移到 Aurora Serverless v2。购买计算节省计划。

**#537｜开发机满足十四天低利用条件就自动停** → 按CPU和网络历史指标筛标签，定时Lambda停符合条件实例　〔区分词：Systems Manager、Ama zon〕

- B：配置 AWS Systems Manager 以跟踪 EC2 实例的利用率，并将未充分利用的实例报告给 Ama zon CloudWatch。根据部门、业务单元和环境的标签过滤 CloudWatch 数据。创建一 个 Amazon EventBridge 规则，调用 AWS Lambda 函数以停止未充分利用的 EC2 实例 。

**#539｜全组织BusinessUnit已打标签要分账可视化** → 激活成本标签，CUR落管理账户S3，Athena查账，QuickSight画图　〔区分词：C UR〕

- A：在组织的管理账户中，创建一个名为 BusinessUnit 的成本分配标签。 在管理账户中，还创建一个 Amazon S3 存储桶和一个 AWS 成本和使用报告 (AWS CUR)。 将 S3 存储桶配置为 AWS CUR 的目标。从管理账户中，使用 Amazon Athena 查询 AWS C UR 数据。使用 Amazon QuickSight 进行可视化。

**#541｜删除堆栈不能顺手删重要RDS和EBS** → 给资源DeletionPolicy设Retain保留或按需要Snapshot　〔区分词：CloudFormation、DeletionPolicy〕

- A：修改 CloudFormation 模板，为 RDS 和 EBS 资源添加 DeletionPolicy 属性。

**#546｜多AZ Linux分析群要共享高吞吐POSIX** → EFS Regional多节点挂载，按题库用Max I/O模式　〔区分词：I/O、EF S〕

- D：配置一个新的 Amazon 弹性文件系统 (Amazon EFS) 文件系统，使用最大 I/O 性能模式。将 EF S 文件系统挂载到集群中的每个 EC2 实例上。

**#547｜EC2定价文件只启动下载导致旧价格** → Mountpoint for S3挂载价格对象，核验缓存刷新配置　〔区分词：Mountpoint、EC2〕

- C：使用 Mountpoint for S3 将定价文件挂载到 EC2。

**#550｜市场流夜间统计可失败重跑** → Firehose落S3，Batch Spot夜间跑完即停

- B：更新数据摄取过程，使用 Amazon Data Firehose 将数据保存到 Amazon S3。使用 AWS Batch 与 Spot 实例进行每晚处理，最大 Spot 价格为按需价格的 50%。

**#556｜多人同时改S3 JSON不能覆盖彼此** → If-Match带ETag做条件写，冲突发SQS延迟重读合并再试　〔区分词：If-Match、ETags、Lamb da、SQS〕（待核验）

- B：部署一个 S3 存储桶。配置条件写入以使用 If-Match 头和实体标签 (ETags)。 配置一个 AWS Lambda 函数以根据 Amazon S3 对写入的响应检测编辑冲突。配置 Lamb da 函数将重试消息发送到带有延迟的 Amazon SQS 队列。

**#561｜SFTP加定时转换和消息服务器要简化** → Transfer Family落S3，事件触发Glue转文件，再发SQS　〔区分词：SQS〕

- C：使用 Amazon S3 作为存储，利用 AWS Glue 通过 S3 事件触发转换，并通过 SQS 进行通知。

**#563｜NGINX静态加EC2 API和搜索数据库想现代化** → 网页S3加CloudFront，API App Runner，搜索OpenSearch，关系库Aurora　〔区分词：CloudFront、Web、OpenSearc h、Aurora Postgre SQL〕

- B：通过使用 Amazon S3 源在 Amazon CloudFront 上托管 Web 应用程序。使用 OpenSearc h Service 存储搜索数据，并将 PostgreSQL 数据库迁移到 Amazon Aurora Postgre SQL 集群。通过 AWS App Runner 运行 API。

**#569｜Lambda短连接读Aurora副本过多** → RDS Proxy建只读端点，Lambda通过代理连接池访问

- A：使用 Amazon RDS Proxy 为数据库集群创建一个代理。为 代理配置一个只读端点。更新 Lambda 函数以连接到代理端点。

**#571｜票务等待室负载挤占购票核心服务** → 等待室拆独立ECS服务单独伸缩，CloudFront按JWT分流　〔区分词：CloudFront〕

- C：在 ECS 集群中为等待室创建一个单独的服务。使用单独的扩展配置。 创建一个 CloudFront 函数，检查 JWT 信息并适当地将请求转发到票务服务或等待室服务。

**#581｜.NET单体有源码且SQL Server过程要应对半年暴涨** → API Gateway加Lambda拆微服务，SCT改存储过程，Aurora Serverless v2弹性存储　〔区分词：Schema Conversion Tool、SCT、Aurora Serverless v2〕

- D：使用 Amazon API Gateway API 和 AWS Lambda 函数将应用程序解耦为 微服务。使用 AWS Schema Conversion Tool (AWS SCT) 审查和修改存储 过程。将数据存储在 Amazon Aurora Serverless v2 中。

**#585｜本地iSCSI要低延迟热数据和时间点快照** → Cached Volume Gateway缓存热块，AWS Backup留快照

- C：在缓存模式下配置一个 AWS Storage Gateway 卷网关。使用 AWS Backup 备份本地 Storage Gateway 卷。

**#589｜JSON传感器数据实时入灵活无固定模式库** → Kinesis Data Streams收流，消费者写DynamoDB　〔区分词：DynamoDB〕

- B：使用亚马逊 Kinesis 数据流将数据发送到亚马逊 DynamoDB。

**#590｜大型Oracle含过程要少停机迁高可用托管库** → SCT转过程，DMS持续迁Aurora PostgreSQL　〔区分词：Aurora PostgreSQL、SCT〕

- D：使用 DMS 迁移到 Amazon Aurora PostgreSQL。使用 AWS SCT 转换存储过程。

**#591｜租车API大量重复GET需提高容量又省钱** → API Gateway边缘优化加生产阶段缓存

- A：将 API Gateway 区域端点转换为边缘优化端点。在生产阶段启用缓存。

**#600｜车辆MQTT数据激增本地丢包要实时异常检测** → IoT Core接入、Firehose落S3，流分析路径须核验　〔区分词：Core〕（待核验）

- B：使用AWS IOT Core接收车辆数据。配置规则将数据路由到一个Amazon Kinesis数据消防流 ，该流将数据存储在Amazon S3中。创建一个Amazon Kinesis数据分析应用程序，从交 付流中读取数据以检测异常。

**#618｜产品关系数据和会话拆开且跨区灾备** → 产品RDS跨区读副本，会话用支持全球数据存储的Redis方案　〔区分词：ElastiCache、Memcached〕（待核验）

- B：创建一个 Amazon RDS 数据库实例来托管产品数据。在另一个区域为数据库 实例配置一个只读副本。在 Amazon ElastiCache for Memcached 中创建一个全局数据存储来托管 用户会话数据。

**#620｜信用卡PAN落S3后要先脱敏再转JSON** → Glue爬虫及分类器识格式，上传触发ETL遮PAN改字段后写安全目标桶

- C：创建一个基于数据源格式的 AWS Glue 爬虫和自定义分类器，并构建一个匹配的表定义。 在文件交付时触发 AWS Lambda 函数，启动 AWS Glue ETL 作业，根据处理和转换要求转换 整个记录。将输出格式定义为 JSON。一旦完成，让 ETL 作业将结果发送到另一个 S3 存储桶 进行 内部处理。

**#621｜欧美MySQL两边要写且互看最新数据** → 迁Aurora Global Database，欧洲开Write Forwarding并选匹配的一致性设置　〔区分词：06〕（待核验）

- A：创建一个 Amazon Aurora MySQL 副本，作为 MySQL 数据库实例的 RDS。暂停应用程序 对 RDS 数据库实例的写入。将 Aurora 副本提升为独立的数据库集群。重新配置应用程序以 使用 Aurora 数据库并恢复写入。将 eu-west-1 添加为 06 集群的辅助区域。启用数据库集群 的写入转发。在 eu-west-1 部署应用程序。 配置应用程序以使用 eu-west-1 中的 Aurora MySQL 终端节点。

**#624｜基因设备实时小记录要耐久并行分析入仓** → Kinesis Data Streams接数据，多消费者分析，EMR写Redshift　〔区分词：Streams〕

- B：使用 Amazon Kinesis Data Streams 收集入站传感器数据，使用 Kinesis 客户端分析数据 ，并使用 Amazon EMR 将结果保存到 Amazon Redshift 集群。

**#625｜不能让用户绕过CloudFront直打ALB** → CloudFront加秘密源站头，ALB校验匹配才转发

- C：向 CloudFront 分发添加安全头。在 ALB 上实施头验证和强制执行。

**#630｜博客新加视频后流量十倍且卡顿** → 视频从EFS搬S3，CloudFront缓存分发　〔区分词：S〕

- C：配置 Amazon CloudFront 分发。将分发指向 S3 存储桶，并将视频从 EFS 迁移到 Amazon S 3。

**#631｜本地NFS备份五天后归档且能等数天恢复** → File Gateway提供NFS，S3生命周期五天转Deep Archive

- E：部署一个与 S3 存储桶关联的 AWS Storage Gateway 文件网关。将文件 从本地文件存储解 决方案移动到文件网关。创建一个 S3 生命周期规则，在 5 天后将文件移动到 S3 Glacier 深度 归档。

**#642｜电商Lambda冷启动SQL注入且数据库按需贵** → 预置并发预热、WAF拦SQL注入、RDS RI省稳定底座费　〔区分词：CloudFront、WAF〕

- D：使用预置并发，使用 RDS 预留实例，使用与 CloudFront 结合的 AWS WAF

**#645｜多区域网站数据库故障还要继续购买** → 跨区RDS读副本灾时提升，应用切新主，再补新的灾备副本

- D：在 Amazon RDS 上配置只读副本。在发生中断的情况下，将跨区域的只读副本提升为独立 的数据库实例。将数据库流量引导到提升的数据库实例。创建一个以提升的数据库实例为源 的替代只读副本。

**#648｜Docker用NFSv4共享且不管任何主机** → ECS Fargate配EFS卷，任务定义填文件系统和IAM授权

- A：通过使用 Amazon Elastic Container Service (Amazon ECS) 和 Fargate 启动类型来部署应用 程序容器。使用 Amazon Elastic File System (Amazon EFS) 进行共享存储。在 ECS 任务定义 中引用 EFS 文件系统 ID、容器挂载点和 EFS 授权 IAM 角色。

**#656｜有Kubernetes清单要最少改动上云** → 清单搬EKS托管节点，数据库换Aurora　〔区分词：EKS、Aurora〕

- B：Amazon EKS 与托管节点组和 Aurora

**#675｜有状态零售单机要营销扩容且可靠** → ALB加EC2 ASG，Aurora MySQL存业务，ElastiCache Redis复制组存会话　〔区分词：Aurora、ElastiCache、Redis〕

- B：将数据库迁移到 Amazon Aurora MySQL。在 Amazon EC2 实例上通过应用程序负载均衡器 部署应用程序于自动扩展组中。将会话存储在 Amazon ElastiCache for Redis 复制组中。

**#679｜第三方偶尔导入坏图且已有Python检测代码** → 题库在Lambda@Edge Origin Response检测，但响应体可见性须核验（待核验）

- B：使用由源响应事件触发的 Lambda@Edge 函数。

**#681｜开发测试只工作时间用却全周24小时跑** → EventBridge按环境标签定时Lambda停开EC2和RDS，生产保持运行　〔区分词：Eve〕

- B：创建一个 Amazon EventBridge（Amazon CloudWatch Events）规则，该规则在每个工作日 的晚上运行。配置该规则以调用一个 AWS Lambda 函数，该函数根据标签停止实例。创建第 二个 EventBridge（CloudWatch Events）规则，该规则在每个工作日的早上运行。配置第 二个规则以调用另一个 Lambda 函数，该函数根据标签启动实例。创建一个 Amazon Eve

### 安全与权限

**#4｜EKS节点和ECR镜像持续查漏洞** → 请Inspector检查员查漏洞　〔区分词：Inspector〕

- B：激活 Amazon Inspector 以扫描 EKS 节点和 ECR 存储库。

**#7｜两个S3桶数百万旧对象要补SSE-S3** → 新货开默认加密，旧货用Batch Operations原地复制重新包

- A：在两个 S3 存储桶上启用 SSE-S3。使用 S3 批量操作在同一位置复制并加密对象。

**#10｜学生新账户要在悉尼跑训练和推理** → 管理账户在美东建配额模板并关联，悉尼训练和端点各加一个配额

- A：在组织的管理账户中，在 us-east-1 区域创建一个配额请求模板。 启用模板关联。在 ap-southeast-2 为 ml.p2.xlarge 训练作业使用添加配额。将所需配额设置 为 1。在 ap-southeast-2 为 ml.p2.xlarge 端点使用添加配额。将所需配额设置为 1。

**#16｜每次SSH要临时独立密钥并留审计** → EC2 Instance Connect推60秒公钥，CloudTrail记推钥API　〔区分词：C C、60、CloudTrail〕（待核验）

- E：C C 是正确的，因为 EC2 实例连接会在短暂的连接窗口内将临时 SSH 公钥推送到实例，而不 是依赖于长期共享密钥对。这满足了每个 SSH 会话使用唯一密钥的要求。AWS 文档指出， SendSSHPublicKey API 将 SSH 公钥推送到指定实例，并且该密钥保持 60 秒。EC2 API 调用，包括 SendSSHPublicKey，都会记录在 CloudTrail 中，这为公司提供了可审 计的连接记录。Secrets Manager 密钥存储本身并不会记录实际的 SSH 连接尝试，并且仍然 在密钥检索和轮换方面留下操作复杂性。Systems Manager 文档也没有提供 EC2 实例连接 所提供的干净的会话特定 SSH 密钥行为。

**#21｜外部团队API突增且不想改Lambda** → API Key绑生产阶段和使用计划，限速加限额

- D：创建一个 API Gateway API 密钥和使用计划。在使用计划中定义限流限制和配额。 将使用计划与生产阶段和 API 密钥关联。与 外部开发团队共享 API 密钥。

**#29｜所有账户安全组共用本地CIDR** → 安全账户建托管前缀列表，RAM共享，安全组引用列表ID　〔区分词：AW S〕

- C：在安全团队的 AWS 账户中创建一个新的客户管理前缀列表。用所有内部 CIDR 范围填充客户管 理前缀列表。通过使用 AWS 资源访问管理器与组织共享客户管理前缀列表。通知每个 AW S 账户的所有者在其安全组中允许新的客户管理前缀列表 ID。

**#30｜Redis已静态加密但传输未加密也不验身份** → 传输加密加AUTH，Secrets Manager保令牌

- B：创建一个 AUTH 令牌，将令牌存储在 AWS Secrets Manager 中。配置现有集群以使用 AUTH 令牌并配置传输加密。更新应用程序，以便在必要时从 Secrets Manager 中检索 AUTH 令牌， 并使用 AUTH 令牌进行身份验证。

**#37｜EFS备份要跨账户跨区恢复且加密** → 两边新保险库配客户KMS授权，再复制到恢复账户（待核验）

- B：在源账户中创建一个新的备份保险库，并在恢复账户中创建一个新的备份保险库。 使用多区域客户管理的 KMS 密钥加密数据。将备份重定向到新的备份保险库。配置密钥策略声 明，以允许恢复账户访问该密钥。 安排一个跨账户的备份计划到恢复账户。

**#49｜两家公司共享S3要加密审计** → 题库记访问点、客户KMS和CloudTrail，RAM共享须核验（待核验）

- C：为两个组织创建 S3 访问点，并使用 AWS 资源访问管理器（AWS RAM）共享访问点。附加授 予跨组织访问权限的 IAM 策略。 使用客户管理的 AWS KMS 密钥来加密数据。在两个区域启用 AWS CloudTrail。

**#59｜Control Tower多账户安全集中看** → 组织启用Security Hub并指定委托管理员　〔区分词：Security Hub〕

- D：在 AWS Organizations 中为组织启用 AWS Security Hub，指定一个 AWS 账户作为 Security Hub 的委托管理员

**#60｜SCP允许S3却不能建桶** → SCP画上限，IAM还得真正授予S3权限　〔区分词：IAM〕

- C：指示开发人员将 Amazon S3 权限添加到他们的 IAM 实体中。

**#63｜员工用本地AD登录AWS控制台** → Organizations开全功能，AD Connector接本地，SSO权限集映射组　〔区分词：Co nnector〕

- D：在 AWS Organizations 中创建一个组织。为该组织启用所有功能。创建并配置一个 AD Co nnector 以连接到公司的本地 Active Directory。配置 AWS SSO 并选择 AD Connector 作 为身份源。创建权限集并将其映射到公司 Active Directory 中的现有组。

**#66｜Java Lambda促销时冷启动又连接失败** → RDS Proxy管连接、Secrets Manager管密码、预置并发预热

- B：使用 RDS Proxy。将数据库凭证存储在 Secrets Manager 中。更新 Lambda 以使用 RDS Proxy。增加 预配置并发。

**#67｜欧盟视频元数据不能越出欧盟** → 分区域栈、地理路由分流、区域内存储、SCP限制区域　〔区分词：Organizations SCP〕

- A：通过使用 API Gateway 和 Lambda 部署独立的欧盟和非欧盟处理堆栈。使用 Amazon Route 53 地理位置路由将欧盟上传发送到欧盟端点。将欧盟媒体存储在欧盟地区的 Amazon S3 中 。将欧盟元数据存储在欧盟地区的 DynamoDB 中。通过使用 Organizations SCP 强制执行 区域限制。

**#70｜私有CA设备安装后才能注册** → 预置钩子Lambda先验序列号再放行

- A：使用 Lambda 作为预配置钩子在注册之前验证序列号。

**#76｜跨账户DBA要读AWS托管密钥加密的秘密** → 别直接跨账户解密，先AssumeRole进入秘密所在账户再读取　〔区分词：DBA-Secret、DBA-Admi n〕

- B：在应用账户中，创建一个名为 DBA-Secret 的 IAM 角色。授予该角色访问秘密所需的 权限。在 DBA 账户中，创建一个名为 DBA-Admin 的 IAM 角色。 授予 DBA-Admin 角色所需的权限，以便在应用账户中假设 DBA-Secret 角色。将 DBA-Admi n 角色附加到 EC2 实例，以访问跨账户的秘密。

**#84｜网页提交跨域报错且CloudFront源已设CORS** → 还要在API Gateway启用CORS并返回允许来源响应头　〔区分词：Gateway、Access-Control-Al low-Origin〕

- C：在 API Gateway API 端点上启用 CORS 设置。确保 API 端点配置为返回所有 Access-Control-Al low-Origin 头设置为 www.example.com 的响应。

**#85｜不同团队只能启动获准EMR配置且统一标签** → Service Catalog把版本配置权限和标签封成可领产品　〔区分词：Service Catalog〕

- A：配置 AWS Service Catalog 以控制可部署的 Amazon EMR 版本、 集群配置和每个用户组的权限。

**#95｜AI代理不代用户办事而以自己身份调用服务** → AgentCore Identity注册工作负载身份，OAuth客户端凭证授权并留身份审计

- A：在 Amazon Bedrock AgentCore Identity 代理身份目录中将代理注册为工作负载身份。通 过使用 OAuth 2.0 客户端凭证授权流为每个下游服务配置资源凭证提供程序。使用工作负载身 份使下游服务和审计系统能够识别每个操作是由哪个代理执行的。

**#102｜CloudFront参数顺序大小写不同导致缓存失效** → Viewer Request上的CloudFront Function统一小写并排序　〔区分词：Functions、CloudFron t〕

- B：创建一个 CloudFront 函数，以按字母顺序对传入请求的查询参数进行排序，并将参数转换为 小写。配置 CloudFront 分发以使用 CloudFront Functions 函数类型。配置 CloudFron t 函数在查看者请求时调用。

**#104｜只在S3公开时通知安全团队** → IAM Access Analyzer找公开访问，EventBridge筛isPublic再发SNS　〔区分词：isPublic: true〕

- B：在 AWS 身份与访问管理访问分析器中创建一个分析器。为事件类型“访问分析器发现” 创建一个 Amazon EventBridge 规则，并设置过滤器为“isPublic: true”。选择 SNS 主题作 为 EventBridge 规则目标。

**#122｜S3新旧PII都改由安全团队管密钥** → 改客户管理SSE-KMS并重写旧对象，桶策略强制符合加密要求　〔区分词：AES-256〕（待核验）

- D：在 S3 存储桶属性中，将默认加密更改为使用客户管理密钥的 AES-256。 附加一个策略，以拒绝对任何访问 S3 存储桶的实体的未加密 PutObject 请求。使用 AWS CLI 重新上传 S3 存储桶中的所有对象。

**#126｜二十个少用应用里有Java长报表和内存峰值** → 统一ECS on EC2跑任务，按75%内存伸缩并用CloudWatch监控　〔区分词：ECS、75〕

- B：在 Amazon EC2 上部署 Amazon ECS 容器，并配置自动扩展以实现 75% 的内存利用率。为每 个正在迁移的应用部署一个 ECS 任务，并进行 ECS 任务扩展。通过使用 Amazon Cloud Watch 监控服务和主机。

**#127｜PII留采集区域但匿名数据能跨区分析** → 各区Aurora本地存，DataBrew匿名化，再给Redshift Serverless分析　〔区分词：Redshift Serverless〕

- B：在不同区域部署 Amazon Aurora PostgreSQL 集群。使用 AWS Glue DataBrew 对 PII 数据进行匿名化。通过使用 Amazon Redshift Serverless 分析跨区域数据。

**#128｜开发账户要强制低成本架构又不拖慢自助** → Service Catalog只发带S3网关端点和获准规格的VPC产品

- C：创建一个 AWS 服务目录组合，供用户创建带有 S3 网关端点和批准的 EC2 实例的批准 VPC 配置。与开发者账户共享该组合。配置 AWS 服务目录启动约束，以使用批准的 IAM 角色。限 制开发人员的 IAM 权限，仅允许访问 AWS 服务目录。

**#129｜不知道哪些S3有敏感数据却要管理员控钥** → Macie先找敏感桶，客户KMS限管理员，新对象默认加密旧对象重写　〔区分词：Step Functions〕

- C：使用 Amazon Made 确定哪些 S3 存储桶包含敏感数据。创建一个新的 AWS KMS 客户管理密钥和一个仅提供管理员访问权限的密钥策略。将默认 S3 存储桶加密设置为使用新的 KMS 密钥（SSE-KMS）。创建一个 AWS Step Functions 工作流，以 使用新的 KMS 密钥加密所有现有 S3 对象，这些对象包含敏感数据。

**#142｜没权限登录全部账户却要仅管理员操作IAM** → 组织根挂SCP，限制IAM动作仅管理员角色可用

- A：创建一个适用于所有 AWS 账户的服务控制策略（SCP），仅允许管理员角色进行 IAM 操作。 将 SCP 应用到根组织单位（OU）。

**#144｜RDS默认KMS备份要跨账户且WORM** → 先改客户管理密钥，再Backup跨账户复制并配Vault Lock　〔区分词：Backup〕（待核验）

- A：使用客户管理的 KMS 密钥恢复数据库，并使用 AWS Backup 进行跨账户的保管库共享。

**#153｜AI模型自己发现并调用企业网关批准工具** → 题库用Responses API引用AgentCore Gateway ARN作工具连接器　〔区分词：ARN〕（待核验）

- B：配置 Responses API 以引用 AgentCore 网关 ARN 作为工具连接器，以便 模型检索并调用已批准工具的目录。

**#156｜隔离SageMaker仍要拉私有Git包** → 题库记Git资源加Secrets Manager，另核验私网可达路径　〔区分词：Secrets Manager〕（待核验）

- A：通过引用远程 URL 将 Git 仓库添加为 SageMaker 的资源。配置 AWS Secrets Manager 使用 Git 凭据访问该仓库。

**#158｜管理账户用户要停掉成员账户资源** → 成员账户建最小权限跨账户角色，管理用户通过信任策略承担角色

- D：在管理账户中创建一个 IAM 用户。在成员账户中创建具有最小权限访问的跨账户角色。通 过使用信任策略授予 IAM 用户对角色的访问权限。

**#161｜每个OU资源都必须有指定值标签** → SCP管缺标签不得创建，标签策略管各OU允许的标签值

- A：使用服务控制策略（SCP）拒绝创建没有所需标签的资源。创建一个标签策略， 包括公司分配给每个组织单位（OU）的标签值。将标签策略附加到OU。

**#165｜OU任何新旧EC2都不能拿公网IP** → SCP同时拦启动带公网IP和给旧机绑公网IP　〔区分词：SCP〕

- C：创建一个 SCP，防止启动具有公共 IP 地址的实例。此外，配置 SCP 以防止将公共 IP 地址附加到现有实例。将 SCP 附加到 OU。

**#167｜现有1Gbps DX要加密和高可用** → 题库记VPN备份加MACsec，但1Gbps支持条件须核验　〔区分词：IP、Dir ect〕（待核验）

- A：添加一个动态私有 IP AWS Site-to-Site VPN 作为次要路径，以保护传输中的数据并为 Dir ect Connect 连接提供弹性。配置 MACsec 以加密 Direct Connect 连接中的流量。

**#168｜合作伙伴要安全访问另一组织客户资源** → 客户建最小权限角色，伙伴用STS承担角色，第三方场景配ExternalId

- C：客户应创建一个 IAM 角色并为该 IAM 角色分配所需权限。然后，合作伙伴公司应在请求 访问以执行所需任务时使用 IAM 角色的 Amazon 资源名称 (ARN)。

**#169｜数百账户只能在指定区域操作** → Control Tower建着陆区，OU挂区域限制SCP　〔区分词：Control Tower〕

- C：启动 AWS Control Tower 登陆区。创建组织单位并附加拒绝在批准区域外运行服务的服务 控制策略。

**#170｜Aurora插入为主连接过载且密码明文** → RDS Proxy池化连接，Secrets Manager保管并轮换凭据

- A：在数据库实例前部署一个 Amazon RDS Proxy 层。将连接凭据作为秘密存储在 AWS Secrets Manager 中。

**#172｜多账户自定义安全控制要IaC重复部署** → Control Tower配CloudFormation自定义，生命周期事件由EventBridge触发部署　〔区分词：Control Tower〕

- C：启用 AWS Control Tower 来设置和管理多账户环境。使用强制执行安全最佳实践的蓝图。 使用 AWS Control Tower 和 CloudFormation 的自定义来定义每个账户的自定义控制。 使用 Amazon EventBridge 在账户配置生命周期事件期间部署 AWS Control Tower 的自定义。

**#173｜不同角色只启动获准EMR配置并统一标签** → Service Catalog按用户角色发批准产品　〔区分词：Service Catalog〕

- C：使用 AWS Service Catalog 控制可用于部署的 Amazon EMR 版本、集群 配置以及每个用户角色的权限。

**#174｜QA和生产Lambda密码不能写代码又要轮换** → Secrets Manager分环境存秘密开轮换，环境变量只放秘密引用　〔区分词：Secrets〕

- B：将两个环境的数据库凭证存储在 AWS Secrets Manager 中，为 QA 环境和生产环境提供不同 的密钥条目。启用轮换。将 Secrets Manager 密钥的引用作为环境变量提供给 Lambda 函 数。

**#175｜白名单SCP下开发者仍能用其他服务** → 检查同层仍附的FullAWSAccess，移除后让允许列表真正收紧　〔区分词：OU〕

- B：从开发人员账户的 OU 中移除完全 AWS 访问 SCP

**#179｜营销账户QuickSight要读销售账户S3** → 销售账户建读桶角色并信任营销角色，QuickSight通过承担角色访问　〔区分词：IAM〕

- D：在销售账户中创建一个 IAM 角色，并授予对 S3 存储桶的访问权限。从市场账户中， 假设销售账户中的 IAM 角色以访问 S3 存储桶。更新 QuickSight 角色，以与销售账户中的新 IAM 角色创建 信任关系。

**#181｜开发者乱选EC2规格导致测试费高** → IAM策略限制允许的实例类型，附到开发者组

- C：创建一个新的 IAM 策略。指定允许的实例类型。将该策略附加到包含开发人员 IAM 账户的 IAM 组。

**#187｜多账户不同合规基线且用本地ADFS** → Organizations加Control Tower建OU控制，Identity Center接ADFS联合登录

- B：在 AWS Organizations 中创建一个组织。启用组织中的 AWS Control Tower。 审查包含的控制（保护措施）以用于 SCP。检查 AWS Config 以确定需要添加的区域。 根据需要添加 OU。将 AWS IAM 身份中心（AWS 单点登录）连接到本地 AD FS 服务器。

**#190｜不能改第三方应用却要指定用户加MFA** → ALB认证接Cognito用户池，池内限定用户并强制MFA　〔区分词：Cognito〕

- A：在 Amazon Cognito 中创建用户池。为该应用程序配置池。用所需用户填充池。配置池以要 求 MFA。在 ALB 上配置监听器规则以要求通过 Amazon Cognito 托管的 UI 进行身份验证。

**#195｜只许CloudFront访问ALB还要自动轮换暗号** → Secrets Manager存随机头，Lambda轮换，CloudFront带头，ALB侧WAF验头　〔区分词：Secrets、Lambda、Web〕

- A：在 AWS Secrets Manager 中存储一个随机字符串。创建一个 AWS Lambda 函数以实现自动 密钥 轮换。配置 CloudFront 将随机字符串作为自定义 HTTP 头注入到源请求中。创建一 个 AWS WAF Web ACL 规则，为自定义头设置字符串匹配规则。将 Web ACL 与 ALB 关联。

**#213｜监管审计要跨账户历史证据和框架报告** → Config规则及合规包评估，聚合器汇总，Audit Manager收证出报告　〔区分词：Conf ig、WS Audit Manager〕

- D：在所有账户中启用 AWS Config 规则，以评估所需的安全控制。在审计账户中使用 AWS Conf ig 聚合器来集中配置数据。部署与所需监管框架对齐的 AWS Config 合规包。使用 A WS Audit Manager 收集证据并生成审计报告。

**#214｜Fargate任务数达到配额80%就告警** → CloudWatch Usage除SERVICE_QUOTA算占比，再用SNS提醒　〔区分词：AWS/Usage〕

- B：使用 Amazon CloudWatch 监控在 AWS/Usage 指标命名空间下发布的服务配额。当数学表 达式指标/SERVICE_QUOTA 指标乘以 100 大于 80 时设置警报。通过 Amazon SNS 通知开发 团队。

**#221｜SQL注入把Fargate API撑到最大容量** → ALB挂WAF，SQL注入规则阻断攻击并允许其余合法流量

- C：创建一个新的 AWS WAF 网络 ACL。添加一个新的规则，阻止与 SQL 数据库 规则组匹配的请求。设置网络 ACL 以允许所有其他不匹配这些规则的流量。将网络 ACL 附加到 ECS 任务前面的 ALB。

**#222｜网站仅允许指定国家且要记录拦截** → ALB关联WAF地理匹配规则，开启日志看被阻止请求

- B：创建一个 AWS WAF 网络 ACL。配置一个规则以阻止任何不来自 指定国家的请求。将该规则与网络 ACL 关联。将网络 ACL 与 ALB 关联。

**#228｜管理账户用户新建成员账户后要建IAM用户** → 应承担新账户OrganizationAccountAccessRole再管理，原登录法核验　〔区分词：Supportl〕（待核验）

- D：前往 AWS 管理控制台登录页面。使用新成员账户的账户 ID 和 Supportl IAM 凭证登录。根据需 要设置 IAM 用户。

**#239｜收购公司只准用自己的SAML身份登录WorkSpaces** → 题库在成员账户开Identity Center账户实例并接独立IdP（待核验）

- D：启用在成员账户中创建账户实例。配置成员 AWS 账户中的 IAM 身份中心 账户实例。将 身份源配置为公司 B 的基于 SAML 的 IdP。配置 WorkSpaces 使用该账户实例作为其身份验证 源。

**#250｜市场账户只能看财务DynamoDB特定字段** → 表资源策略加Attributes细粒度条件，市场角色也授对应访问

- C：创建一个基于资源的 IAM 策略，其中包括特定 DynamoDB 属性的条件（细粒度访问控制） 。将策略附加到 DynamoDB 表。在市场团队的账户中，创建一个具有权限以访问财务团队 账户中 DynamoDB 表的 IAM 角色。

**#256｜旧IAM组权限要迁Identity Center** → 按组建Permission Set并分配账户，角色和策略映射须核验（待核验）

- B：为每个组创建一个新的权限集。在每个账户中将相关的现有 IAM 角色附加到权限集中。创建 一个新的客户管理策略，允许该组承担这些角色。 在 IAM 身份中心中为 AWS 账户分配用户访问权限。

**#259｜ECR需持续查系统和语言包新漏洞** → 增强扫描接Inspector，持续扫描并用EventBridge投递发现　〔区分词：Inspector〕

- D：启用 Amazon ECR 增强扫描。将增强扫描与 Amazon Inspector 集成。 为存储库配置持续扫描。使用 Amazon Inspector 跟踪容器镜像的部署状态。 配置 Amazon EventBridge 规则以捕获 Amazon Inspector 发现，并 将发现结果路由到公司的现有事件驱动工作流。

**#260｜GitHub Actions不能再用长期AK** → IAM建GitHub OIDC信任，STS WebIdentity换短期角色凭证　〔区分词：OpenID Connect (OIDC、OIDC、sts:AssumeRoleWithWebIdentity〕

- B：在 IAM 中创建一个 IAM OpenID Connect (OIDC) 身份提供者 (IdP)。创建一个新的 IAM 角色 ，并设置 适当的信任策略，允许来自 GitHub OIDC IdP 的 sts:AssumeRoleWithWebIdentity API 调用。更新 GitHub 以在管道中假设该角色。

**#262｜Lambda查Aurora密码泄漏风险且S3不能走公网** → Aurora开IAM数据库认证，S3建网关端点

- A：在 Aurora 数据库集群上启用 IAM 数据库身份验证。更改 Lambda 函数的 IAM 角色，以允许 该函数通过 IAM 数据库身份验证访问数据库。在 VPC 中部署一个 Amazon S3 的网关 VPC 端 点。

**#267｜每周换IP的爆破登录压垮认证服务** → ALB前WAF基于速率规则拦高频来源　〔区分词：CL〕

- B：创建一个 AWS WAF 网络 ACL，使用基于速率的规则，并将规则操作设置为阻止。将网络 A CL 连接到 ALB。

**#270｜上WAF不能误伤真实用户** → 先Count加日志调规则，确认后再逐步Block

- A：将 web ACL 规则的操作设置为计数。启用 AWS WAF 日志记录，分析请求以 识别误报，修 改规则以避免任何误报。随着时间的推移，将 web ACL 规则的操作从计数更改为阻止。

**#271｜内部Web要改用AD目录身份认证** → 题库记ALB authenticate-oidc接身份提供者端点和回调　〔区分词：auth enticate-oidc、Active Directory、URL〕（待核验）

- A：在目录中创建一个新的应用客户端。为 ALB 创建一个监听器规则。为监听器规则指定 auth enticate-oidc 操作。使用适当的发行者、客户端 ID 和密钥，以及 Active Directory 服务的 端点详细信息来配置监听器规则。使用 ALB 提供的回调 URL 配置新的应用客户端。

**#274｜非生产账户禁止安全组开放0.0.0.0/0** → 原SCP用SourceIp匹配不对，勿把调用来源当安全组CIDR　〔区分词：AuthorizeSecurity Grouplngress〕（待核验）

- D：配置 SCP，以拒绝在 aws Sourcelp 条件键的值为 0.0.0.0/0 时执行 ec2 AuthorizeSecurity Grouplngress 操作。将 SCP 应用到 NonProd OU。

**#280｜所有Windows EC2需进AD并由托管服务管理** → Managed Microsoft AD建目录，用WorkSpaces做域管理

- A：为 Microsoft Active Directory 实现创建 AWS 目录服务。启动一个 Amazon 工作区。连接并使用工作区进行域安全配置任务。

**#291｜旧EBS未加密又要禁止新增裸盘** → Config发现后SSM建加密副本替换，账户开启EBS默认加密

- D：配置 AWS Config 管理规则，以识别未加密的 EBS 卷。配置自动修复操作。关联一个 AW S Systems Manager 自动化运行手册，其中包括创建新的加密 EBS 卷的步骤。修改 AWS 账 户设置，以便 EBS 加密始终加密新的 EBS 卷。

**#295｜跨账户补丁必须先非生产再生产并可审计** → SSM Patch Manager加委托管理，按OU分批审批，合规与CloudTrail留证

- C：配置 AWS 系统管理器补丁管理器与补丁基线。启用系统管理器的委派管理并分配 一个委派管理员账户。创建针对组织单位的系统管理器自动化运行手册。首先通过使用审 批门对非生产组织单位中的实例应用补丁，然后再对生产组织单位进行补丁。使用系统管理 器 合规性和 AWS CloudTrail 审计组织单位中的合规性。

**#304｜不同部门开发者误停别人的EC2** → SAML传部门Session Tag，IAM比较主体标签与资源标签不符就拒绝　〔区分词：De velopmentUnit、aws:PrincipalTag/DevelopmentUnit、StringNotEquals〕

- B：在 SAML 联合身份验证期间，将 DevelopmentUnit 的属性作为 AWS 安全令牌服务（AWS STS）会话标签传递。更新开发人员假定的 IAM 角色的 IAM 策略，添加拒绝操作和针对 De velopmentUnit 资源标签及 aws:PrincipalTag/DevelopmentUnit 的 StringNotEquals 条 件。

**#313｜EC2角色Secrets权限太宽需按实际使用收紧** → IAM Access Analyzer按历史访问生成策略再替换宽权限（待核验）

- B：在 AWS 身份和访问管理访问分析器中创建一个分析器。使用 IAM 角色的 访问顾问发现来创建一个新的 IAM 策略。使用新创建的 IAM 策略替换 附加到 IAM 角色的 SecretsManagerReadWnte 策略。

**#320｜客户端到Web服务器全程都要TLS** → ALB用HTTPS监听，后端目标也HTTPS，各EC2部署有效证书

- A：将 EC2 实例放置在应用负载均衡器 (ALB) 后面，通过 AWS 证书管理器 (ACM) 提供 SSL 证书， 并将 SSL 证书与 ALB 关联。导出 SSL 证书并将其安装在每个 EC2 实例上。配置 ALB 监听 端口 443，并将流量转发到实例的端口 443。

**#323｜私有CA设备安装前不许连云** → IoT模板预配置钩子Lambda验SerialNumber，再允许自动注册　〔区分词：I oT、allow-auto-registration〕

- C：创建一个 AWS Lambda 函数，以验证序列号。创建一个 AWS IoT Core 配置模板。在 参数部分包含 SerialNumber 参数。将 Lambda 函数添加为预配置钩子。将 CA 注册到 AWS I oT Core，指定配置模板，并设置 allow-auto-registration 参数。

**#324｜各部门要用IT账户私有CA签证书** → RAM共享Private CA给部门OU，保留账户边界　〔区分词：RAM、OU〕

- D：在 IT 账户中使用 AWS 资源访问管理器 (AWS RAM) 启用组织内的共享。创建资源共 享。将私有 CA 资源添加到资源共享中。授予部门 OU 访问共享 CA 的权限。

**#326｜只有六家伙伴每天交数据却来了全球机器人** → WAF白名单伙伴IP，API Key配使用计划限流限额

- D：创建一个 AWS WAF 网络 ACL，规则允许六个合作伙伴使用的 IP 地址访问。 将网络 ACL 关联到 API。创建一个带有请求限制的使用计划，并将其与 API 关联。创建一个 API 密钥并将其添加到使用计划中。

**#327｜数据上传S3前客户端加密且多区共用同源密钥** → KMS多区域主钥加各区副本钥，本地调用本区钥

- A：创建一个 KMS 多区域主密钥。使用它在每个 区域创建 KMS 多区域副本密钥。更新应用程序代码以在每个区域使用副本密钥。

**#343｜安全事件后连外部账户也要立即禁读秘密** → Secrets Manager资源策略对所有主体显式Deny GetSecretValue　〔区分词：secretsmanag er:GetSecretValue〕

- B：修改账户 A 中机密的资源策略，明确拒绝对所有主体的 secretsmanag er:GetSecretValue 操作。

**#345｜数据库强随机密码要每90天自动轮换** → 应联想Secrets Manager生成与轮换，原Parameter Store资源名须核验　〔区分词：Systems、Parameter Store、Parameter Store Rot ationSchedule〕（待核验）

- B：使用 AWS Systems Manager Parameter Store 生成数据库密码作为 SecureString 参数 类型。创建一个 AWS Lambda 函数资源来轮换数据库密码。指定一个 Parameter Store Rot ationSchedule 资源以每 90 天轮换一次数据库密码。

**#356｜只有采购经理能管理私有Marketplace** → 采购角色给管理策略，根SCP只放该角色，再禁止别人新建同名角色冒充　〔区分词：procurement- manager-role〕

- C：在组织中的所有共享服务账户中创建一个名为 procurement-manager-role 的 IAM 角 色。将 AWSPrivateMarketplaceAdminFullAccess 管理策略添加到该角色。创建一个组织根 级别的 SCP，以拒绝除名为 procurement-manager-role 的角色外的所有人管理私人市场的 权限。创建另一个组织根级别的 SCP，以拒绝组织中所有人创建名为 procurement- manager-role 的 IAM 角色的权限。

**#363｜生产OU要检测未加密RDS** → Control Tower启用对应检测性控制并应用生产OU

- B：从 AWS Control Tower 中强烈推荐的保护措施列表中启用适当的保护措施。将保护措施应 用于生产 OU。

**#378｜HTTP API沿用第三方OAuth身份** → 客户端带令牌，API Gateway每路由用Lambda Authorizer验证　〔区分词：Lambda〕

- A：将公司的第三方身份提供者与 API Gateway 集成。配置 API Gateway Lambda 授权器以验证来自身份提供者的令牌。在所有 API 路由上要求 Lambda 授权器。 更新网络应用程序以从身份提供者获取令牌，并在调用 API Gateway HTTP API 时将令牌包含 在授权头中。

**#382｜SFTP收到PGP密文后要自动解密** → Secrets Manager存私钥，Transfer Family托管工作流加解密步骤

- C：将 PGP 私钥存储在 Secrets Manager 中，在 Transfer Family 管理的 工作流中添加一个名义步骤以解密文件。配置名义步骤中的 PGP 解密参数，将 工作流与 Transfer Family 服务器关联

**#388｜学生新账户SageMaker默认配额不够** → 管理账户美东建配额模板关联，悉尼训练和端点各加需求配额　〔区分词：ml.p2、xlarge〕

- A：在 us-east-1 创建一个配额请求模板，启用模板关联，并为 ml.p2 添加配额。 在 ap-southeast-2 中使用 xlarge 训练和端点使用。

**#390｜远程工程师VPN进私网且必须MFA** → Client VPN接AD Connector，目录侧配MFA

- B：创建一个 AWS 客户端 VPN 端点，创建一个 AD 连接器目录以与 AD DS 集成。 为 AD 连接器启用 MFA。使用 AWS 客户端 VPN 建立 VPN 连接。

**#391｜项目账户不能加入组织却只许俄亥俄t3.small** → IAM策略同时限制实例类型和us-east-2，附到开发角色及组　〔区分词：IAM〕

- D：创建一个 IAM 策略，仅允许在 us-east-2 中启动 t3.small EC2 实例。将该策略附加到开发 者在项目账户中使用的角色和组。

**#394｜网站多AZ且要拦漏洞并给第三方审计日志** → ALB加多AZ ASG，WAF托管规则拦攻击，Firehose投递日志　〔区分词：WebACL〕

- D：使用应用的 AMI 配置多可用区自动扩展组。创建一个应用负载均衡器（ALB），并选择之前 创建的自动扩展组作为目标。创建一个 Amazon Kinesis Data Firehose，目标为第三方审计 应用程序。在 WAF 中创建一个 web ACL。使用 WebACL 和 ALB 创建 AWS WAF，然后通过 选择 Kinesis Data Firehose 作为目标来启用日志记录。在 AWS Marketplace 中订阅 AWS 管 理规则，选择 WAF 作为订阅者。

**#398｜旧SMTP应用要改用SES且域已验证** → 拿SES SMTP凭据，客户端用STARTTLS连SES　〔区分词：STARTTLS、SMTP〕

- B：配置应用程序以通过使用 STARTTLS 连接到 Amazon SES。获取 Amazon SES SMTP 凭证。使用凭证与 Amazon SES 进行身份验证。

**#399｜每台SSH密钥独立还要按需自动轮换** → Secrets Manager存私钥，Lambda造新密钥并替换实例authorized_keys　〔区分词：Secrets〕

- A：将所有密钥存储在 AWS Secrets Manager 中。定义一个 Secrets Manager 轮换计划，以调用一个 AWS Lambda 函数来生成新的密钥对。替换 EC2 实例上的公钥。更新 Secrets Manager 中的 私钥。

**#419｜MongoDB应用私网TLS且数据库可扩缩** → 联想DocumentDB私网集群与TLS，原“表和预置IOPS”须核验（待核验）

- A：为该应用程序创建新的 Amazon DocumentDB（与 MongoDB 兼容）表，使用 预配置 IOPS 卷。使用实例端点连接到 Amazon DocumentDB。

**#420｜数据备份仅准指定地区且密钥须国内HSM掌握** → KMS XKS接自有HSM，Control Tower区域拒绝控制拦越区　〔区分词：HSM、XKS、Tower〕

- A：使用由公司在国内的 HSM 支持的 AWS KMS 外部密钥存储 (XKS) 进行加密。 对相关组织单位应用 AWS Control Tower 区域拒绝控制，以拒绝在 批准区域之外的操作。

**#421｜根SCP禁Config但新收账户需临时调整Config** → 拒绝移到生产OU，新账户先放Onboarding，调整后再归生产　〔区分词：SC P〕

- D：为新账户创建一个名为 Onboarding 的临时组织单位（OU），并对 Onboarding OU 应用服务 控制策略（SCP），以允许 AWS Config 操作。当 AWS Config 调整完成后，将组织的根 SC P 移动到生产 OU，并将新账户移动到生产 OU。

**#423｜API仅IAM用户角色能用且要看端到端延迟** → AWS_IAM加execute-api权限和SigV4签名，X-Ray画调用链　〔区分词：AWS_IAM、execute-ap i:Invoke〕

- A：对于 API Gateway 方法，将授权设置为 AWS_IAM。然后，给 IAM 用户或角色 execute-ap i:Invoke 权限在 REST API 资源上。启用 API 调用者在访问端点时使用 AWS 签名对请求进行 签名。使用 AWS X-Ray 跟踪和分析用户请求到 API Gateway。

**#431｜数百Lambda执行角色S3和DynamoDB权限过宽** → CloudTrail记录真实调用，Access Analyzer生成最小权限策略再审核

- B：为 AWS 账户启用 AWS CloudTrail 日志记录。使用 AWS 身份和访问管理 访问分析器根据 CloudTrail 日志中记录的活动生成 IAM 访问策略。 审查生成的策略，以确保它们满足公司的业务需求。

**#433｜工程师CLI操作S3每次必须MFA** → 组策略无MFA就拒绝，STS带MFA换临时凭据再操作　〔区分词：STS、Amaz〕

- D：将策略附加到 S3 访问组，以拒绝所有 S3 操作，除非存在 MFA。请求来自 AWS 安全令牌服务 （AWS STS）的临时凭证。将临时凭证附加到一个配置文件中，Amazon S3 在用户执行 Amaz on S3 中的操作时将引用该配置文件。

**#437｜跨OU集中管WAF还要动态增减范围** → Firewall Manager统一策略，Parameter Store记范围，变更事件让Lambda更新　〔区分词：Firewall Manager、Systems Manager Parameter Store、OU、EventBridge、CloudWatch Events〕

- A：使用 AWS Firewall Manager 管理组织中账户的 AWS WAF 规则。使用 AWS Systems Manager Parameter Store 参数存储账户号码和 OU 以进行管理。 根据需要更新参数以添加或删除账户或 OU。使用 Amazon EventBridge （Amazon CloudWatch Events）规则识别参数的任何更改，并调用 AWS Lambda 函数更新 Firewall Manager 管理账户中的安全策略。

**#438｜生产库凭据只许安全团队控钥又须轮换** → Secrets Manager加客户KMS，钥策略限人，Lambda仅给必要读秘权限　〔区分词：Secrets〕

- D：将数据库凭据存储在 AWS Secrets Manager 中，作为与 AWS 密钥管理服务 (AWS KMS) 客户 托管密钥关联的秘密。为每个 Lambda 函数附加一个角色，以提供对该秘密的访问。限制 对秘密和客户托管密钥的访问，以便只有 IT 安全部门可以访问该秘密和密钥。

**#450｜新建EBS必须全加密** → 在每个使用区域启用EBS Encryption by Default

- D：在所有 AWS 区域默认启用 EBS 加密。

**#451｜所有账户S3访问点只准VPC来源** → 根SCP拒CreateAccessPoint除非AccessPointNetworkOrigin等于VPC　〔区分词：SCP、s3:AccessPointN etworkOrigin〕

- B：在组织的根级别创建一个 SCP，以拒绝 s3:CreateAccessPoint 操作，除非 s3:AccessPointN etworkOrigin 条件键的值为 VPC。

**#458｜工程师只能用CloudFormation建批准资源** → 人只给CFN调用权限，服务角色只给批准资源权限并限制PassRole

- C：更新工程师的 IAM 角色的 IAM 策略，仅允许 AWS CloudFormation 操作。创建 一个新的 IAM 策略，允许配置已批准的资源，并将该策略分配给一个新的 IAM 服务角色。 在堆栈创建期间，将 IAM 服务角色分配给 AWS CloudFormation。

**#463｜安全账户需只读审计所有成员账户** → 成员账户建只读角色并信任安全账户，安全团队AssumeRole

- B：使用 Organization AccountAccessRole IAM 角色在每个成员账户中创建一个具有只读访问权 限的新 IAM 角色。在每个成员账户中的 IAM 角色与安全账户之间建立信任关系。请安全团队 使用该 IAM 角色进行访问。

**#476｜SSE-KMS对象频繁访问导致KMS调用费高** → 题库改SSE-S3后Batch复制，若须保留KMS可核验S3 Bucket Key　〔区分词：SSE-S3〕（待核验）

- B：创建一个新的 S3 存储桶，使用 Amazon S3 管理的密钥（SSE-S3）作为加密类型进行服务器 端加密。使用 S3 批量操作将现有对象复制到新的 S3 存储桶中。指定 SSE-S3。

**#481｜每次SSH用唯一密钥且有CloudTrail记录** → 技术抓手记EC2 Instance Connect加SendSSHPublicKey，原题答案失真　〔区分词：Send SSHPublicKey、CLI〕（待核验）

- C：启动新的 EC2 实例，而不为新的 EC2 实例设置任何 SSH 密钥。为每个新的 EC2 实例设置 EC2 实例连接。创建一个新的 IAM 策略。将 IAM 策略附加到工程师的 IAM 角色，并为 Send SSHPublicKey 操作添加允许声明。指示工程师 通过 AWS CLI 使用实例连接连接到 EC2 实例 。

**#495｜认证用户传媒体要加速开发并扛上传** → Amplify建站托管加CloudFront，Cognito验用户，S3直收文件　〔区分词：Amplify、Amplify Hosting、CloudFront〕

- D：使用 AWS Amplify 创建一个静态网站以上传媒体文件。使用 Amplify Hosting 通过 Amazon CloudFront 提供网站。使用 Amazon S3 存储上传的媒体文件。使用 Amazon Cognito 进行用户身份验证。

**#505｜外部审计员要安全只读跨账户** → 本账户建只读角色信任审计账户，信任策略加唯一ExternalId

- B：在公司的 AWS 账户中创建一个信任审计员 AWS 账户的 IAM 角色。创建一个具有所需权限的 IAM 策略。将该策略附加到角色上。为角色的信任策略分配一个唯一的外部 ID。

**#510｜Oracle迁云且密码每年自动轮换** → RDS Oracle托管数据库，Secrets Manager存密码配年度轮换　〔区分词：RDS、Oracle、Secrets〕

- B：将数据库迁移到 Amazon RDS for Oracle。将密码存储在 AWS Secrets Manager 中。开启 自动轮换。配置每年的轮换计划。

**#514｜攻击IP经常换且想自动阻止应用层攻击** → 应联想WAF速率规则，原“路由表添加拒绝”不可行　〔区分词：Lambda〕（待核验）

- C：创建一个监控用户 IP 地址的 Amazon CloudWatch 警报。根据 IP 地址的访问设置阈值。配置 警报以调用 AWS Lambda 函数，为任何激活警报的 IP 地址在应用服务器的子网路由表 中添加拒绝规则。

**#519｜医疗助手禁诊断且脱敏并在推理前省成本** → Bedrock Guardrails设拒绝主题和PII屏蔽，先ApplyGuardrail再Converse审响应　〔区分词：ApplyGuardrail〕

- D：创建一个 Amazon Bedrock 保护措施。配置医疗诊断建议的拒绝主题。配置 敏感信息过滤器以屏蔽个人身份信息 (PII)。配置内容过滤器。在推理之前对用户 提示调用 ApplyGuardrail API。将相同的保护措施包含在 Converse API 中以评估模型响应。

**#522｜API要防Web攻击查漏洞并发现威胁** → WAF挡请求攻击，Inspector查EC2漏洞，GuardDuty发现可疑活动

- C：使用 AWS WAF 保护 API Gateway API。配置 Amazon Inspector 保护遗留 API。配置 Amazon GuardDuty 监控恶意访问 API 的尝试。

**#523｜成员账户接受组织邀请后要集中管理访问** → 在各成员账户建OrganizationAccountAccessRole信任管理账户　〔区分词：AdministratorAc cess〕（待核验）

- D：在管理账户中创建 OrganizationAccountAccessRole IAM 角色。将 AdministratorAc cess AWS 管理策略附加到 IAM 角色。将 IAM 角色分配给每个成员账户中的管理员。

**#528｜遗留.NET巨大基础镜像导致拉取慢** → EC2 AMI预缓存基础镜像，ECR存组件镜像，ECS EC2跑容器　〔区分词：EC2〕

- C：使用 Amazon ECR 存储自定义开发组件的镜像。创建一个包含基础镜像的 AMI。使用基 于该 AMI 的 Amazon EC2 实例上的 Amazon Elastic Container Service (Amazon ECS) 运行工作负载。

**#533｜组织所有账户活动要中央SQL查询** → CloudTrail Lake组织事件数据存储，委托管理员集中查询　〔区分词：Cl oudTrail〕

- B：使用委派的管理员账户创建一个 AWS CloudTrail Lake 数据存储。为数据存储指定Cl oudTrail 管理事件。为组织中的所有账户启用数据存储。在 CloudTrail Lake 中查询 数据。

**#536｜CloudFront后ALB不能被公网直接访问** → ALB安全组只放CloudFront托管前缀列表（待核验）

- C：向 ALB 添加安全组规则，仅允许来自 AWS 管理的 CloudFront 前缀列表的流量。

**#544｜客户端加密能读旧S3却无法上传新对象** → KMS权限补GenerateDataKey来生成数据密钥　〔区分词：Kms:GenerateDataKey〕

- A：Kms:GenerateDataKey

**#555｜所有账户API审计要集中持久安全** → 组织多区域CloudTrail写S3，日志桶版本控制加密和删除保护

- C：在组织的管理账户中创建一个新的 AWS CloudTrail 路径。创建一个新的 Amazon S3 存储桶 ，并开启版本控制以存储日志。为组织中的所有账户部署该路径。启用 S3 存储桶的 MFA 删除和加密。

**#570｜API有JWT认证但ALB后端仍未认证** → ALB监听器集成IdP认证，让另一条后端入口也验身份　〔区分词：IdP〕

- A：配置 ALB 以通过将 ALB 与 IdP 集成来强制执行身份验证和授权。仅允许经过认证的用户访 问后端服务。

**#576｜RDS默认KMS备份要跨账户WORM** → 先转可共享客户KMS数据库，组织Backup复制到中央库并设锁定（待核验）

- A：启用 Organizations 受信任访问和 AWS Backup 的备份策略。将中央账户配置为 AWS B ackup 的委托管理员。创建 IAM 策略和备份策略。 启用跨账户管理。在中央账户中创建一个备份库。为备份库创建一个 KMS 密钥，并将该密钥 与生产账户共享。在生产账户中，从快照恢复数据库，并将共享的 KMS 密钥应用于新的数据 库实例。在中央账户中创建一个备份计划，将数据库备份到备份库。

**#594｜Fargate使用到服务配额80%须通知** → CloudWatch Usage算配额比例，80%告警经SNS发送　〔区分词：AWS/Usage、ECS、SNS〕

- B：使用 CloudWatch 监控 AWS/Usage 命名空间下的 ECS 服务配额。当利用率超过 80% 时创 建警报。通过 SNS 通知。

**#603｜开发者把长期AK写进CodeCommit** → 提交触发Lambda扫秘密，发现就禁用AK并通知　〔区分词：IAM〕

- D：配置 CodeCommit 触发器以调用 AWS Lambda 函数，扫描新代码提交中的凭据。 如果找到凭据，在 AWS IAM 中禁用它们并通知用户。

**#607｜Aurora加密密钥要180天轮换并查不合规** → 换客户管理KMS设180天，快照复制重加密恢复，Config检查周期（待核验）

- B：创建一个新的 AWS 托管 KMS 密钥，自动轮换设置为 180 天。对数据库进行快照。将快照恢复 到使用新 KMS 密钥的新 Aurora 集群。创建一个使用 AWS Lambda 函数验证密钥轮换周期 的 AWS Config 自定义规则。配置 AWS Config 使用 Amazon SES 通知安全团队，如果密钥 加密不合规。

**#611｜每客户请求配额不同且有短期高额度** → API Gateway REST API按客户分Usage Plan和API Key　〔区分词：REST〕

- A：创建一个 Amazon API Gateway REST API，并通过代理集成调用 Lambda 函数。 为每个客户配置一个 API Gateway 使用计划，包括适当的请求配额。 为客户所需的每个用户从使用计划中创建一个 API 密钥。

**#612｜S3桶策略为企业细粒度权限写到长度上限** → S3 Access Grants接Identity Center，按组授数据位置并发临时凭证　〔区分词：PI〕

- A：创建一个 S3 访问授权。将 S3 访问授权与 IAM 身份中心实例关联。 根据业务需求为用户组创建 S3 访问授权，指定适当的 S3 存储桶。使用 Amazon S3 A PI 授予用户组访问所需 S3 存储桶的临时凭证。

**#616｜组织小规模起步未来账户增多也要自动审计** → 管理账户建Organization Trail自动覆盖组织账户　〔区分词：AYYS〕

- B：在组织的管理账户中创建一个新的 CloudTrail 路径。配置该路径以记录组织中所有 AYYS 账 户的所有事件。

**#623｜ECR只许组织访问且保所有带签镜像仅留五个无签** → 仓库策略PrincipalOrgID锁组织，生命周期规则仅清超五个untagged　〔区分词：aws: PrincipalOrglD〕

- A：在 Amazon ECR 中创建一个私有存储库。为存储库创建一个权限策略，仅允许 所需的 ECR 操作。包括一个条件，以允许 ECR 操作，如果 aws: PrincipalOrglD 条件键的值等于公司组织的 ID。向 ECR 存储库添加一个生命周期规则， 删除所有超过五个的未标记镜像。

**#634｜新账户EC2配额要自动申请** → Account创建事件经EventBridge和SNS调Lambda，请求Service Quotas提升　〔区分词：Sim ple Notification Service〕

- A：创建一个 Amazon EventBridge 规则以检测新账户的创建，将事件发送到一个 Amazon Sim ple Notification Service (Amazon SNS) 主题，该主题调用一个 AWS Lambda 函数。配置 La mbda 函数以运行请求服务配额增加命令，以请求 EC2 实例的服务配额增加。

**#636｜组织资源误共享外部且员工跨账户承担需MFA** → Access Analyzer以组织为信任区，发现发EventBridge，角色信任策略要求MFA　〔区分词：EventBridge、aws:MultiFactorAuthPresent〕

- A：配置 AWS IAM 访问分析器以使用组织作为信任区域。配置一个 Amazon EventBridge 规则，以便在 IAM 访问分析器生成新发现时发送通知。 将 aws:MultiFactorAuthPresent 条件键添加到员工 IAM 角色的信任策略中。

**#643｜工程师互改EC2安全设置需追踪不合规告警** → Config记录配置和规则合规变动，SNS通知　〔区分词：Config、Simple Notific ation Service、SNS〕（待核验）

- D：在 EC2 安全组上启用 AWS Config，以跟踪任何不合规的更改。通过 Amazon Simple Notific ation Service (Amazon SNS) 主题将更改作为警报发送。

**#659｜本地AD用户要统一身份按组进多个AWS账户** → 应核验Identity Center或SAML联邦，原普通AD直接OIDC不足　〔区分词：OpenID Connect (OID C、Activ e〕（待核验）

- D：在公司的一项 AWS 账户中，配置 AWS 身份与访问管理 (IAM) 以使用 OpenID Connect (OID C) 身份提供者。配置授予联合用户对 AWS 账户访问权限的 IAM 角色，这些用户对应于 Activ e Directory 中的适当组。通过使用跨账户 IAM 角色授予对所需 AWS 账户的访问权限。

**#663｜模拟故障SSH每次独立临时钥且审计** → EC2 Instance Connect推临时公钥，IAM允SendSSHPublicKey，CloudTrail留API　〔区分词：SendSSHPublicKe y〕

- C：启动新的 EC2 实例，而无需为实例设置任何 SSH 密钥。在每个实例上设置 EC2 实例 连接 。创建一个新的 IAM 策略，并将其附加到工程师的 IAM 角色上，包含对 SendSSHPublicKe y 操作的 允许声明。指示工程师通过 EC2 控制台使用基于浏览器的 SSH 客户端连接到实例。

**#666｜敏感字段经过多微服务但只准处理服务解密** → CloudFront字段级加密用RSA公钥，私钥只留数据处理微服务

- B：创建一个专用于数据处理微服务的 RSA 密钥对。将公钥上传到 CloudFront 分发。创建一个 字段级加密配置文件和配置。将配置添加到 CloudFront 缓存行为。

### 弹性与性能

**#5｜DynamoDB按峰值预置却每天只忙四小时** → 让表自动扩缩，忙时加桌闲时收桌

- C：为表启用 DynamoDB 自动扩展

**#22｜视频处理30分钟却无报错进死信队列** → 把SQS可见性超时拉长到题库给的三小时　〔区分词：SOS〕

- B：将 SOS 队列的可见性超时更新为 3 小时。

**#28｜第三方同步调用拖慢Lambda又必须最终完成** → SQS先排队，Lambda异步处理　〔区分词：SQS〕

- A：使用亚马逊简单队列服务（Amazon SQS）队列来存储事件并调用 Lambda 函数。

**#39｜自管MQTT被三倍突发连接压垮** → IoT Core接设备，IoT规则触发Step Functions Express　〔区分词：Express〕

- A：将 MQTT 代理迁移到 AWS IoT Core。创建一个 AWS IoT 规则以调用 AWS Step Functions Express 状态机来处理数据。

**#57｜REST收数据又要WebSocket推送** → HTTP API接SQS，Lambda写AppSync事件通道，客户端订阅　〔区分词：HTTP、AppS ync〕

- B：创建一个新的 Amazon API Gateway HTTP API 和一个 Amazon SQS 队列。配置 HTTP API 以 与 SQS 队列集成。在 AWS Lambda 函数中实现业务逻辑。使用 SQS 队列来调用 Lambda 函数。配置 Lambda 函数将数据写入 AWS AppSync 事件通道。确保客户端订阅 AWS AppS ync 事件通道。

**#82｜中央用户删除后各微服务都删副本** → EventBridge广播用户删除事件，每个服务订阅后清自己数据　〔区分词：EventBridge〕

- C：定义 Amazon EventBridge 事件总线中发布事件。为每个微服务创建一个 EventBridge 规则 ，以匹配用户删除事件模式并调用微服务中的逻辑以从 DynamoDB 表中删除用户。

**#112｜Redshift审计复杂读查询CPU突增但还要读写** → CloudWatch看CPU80%，Lambda触发弹性调整集群大小

- C：部署一个 AWS Lambda 函数，通过在集群的 CPU 指标在 Amazon CloudWatch 达到 80% 时使用弹性 调整大小操作来增加 Amazon Redshift 集群的容量。

**#117｜Git Webhook不想再维护ALB后EC2** → HTTP API接Webhook，每种逻辑一个Lambda　〔区分词：HTTP〕

- B：创建一个 Amazon API Gateway HTTP API。在单独的 AWS Lambda 函数中实现每个网络钩子的逻辑。更新 Git 服务器以调用 API Gateway 端点。

**#118｜有状态网站迁到ASG且数据库读量增长** → ALB粘性会话粘住用户，Aurora Auto Scaling增加读副本

- C：为 Aurora 副本启用 Aurora 自动扩展。使用具有轮询路由和启用粘性会话的应用程序负载 均衡器。

**#120｜老呼叫中心要上云并发双向短信调查** → Connect管电话，题库Pinpoint管短信（待核验）

- A：使用 Amazon Connect 替换旧的呼叫中心硬件。使用 Amazon Pinpoint 向客户发送 短信调查。

**#137｜数百万设备REST突发且绝不能丢数据** → 核心记队列缓冲加Fargate消费，原ALB直挂SQS须核验　〔区分词：ALB、mazon、ECS、Fargate〕（待核验）

- A：为RESTful API创建一个应用程序负载均衡器（ALB），创建一个Amazon简单队列服务（A mazon SQS）队列，为ALB创建一个监听器和一个目标组，将SQS队列添加为目标。使用在 Amazon弹性容器服务（Amazon ECS）中运行的容器，采用Fargate启动类型来处理队 列中的消息。

**#138｜空气差时MQTT传感器猛增上报** → IoT规则写Kinesis缓冲，Fargate读流处理后写Aurora

- B：创建一个 Amazon Kinesis 数据流。创建一个 AWS IoT 规则操作，并将数据流设置为 target。创建一个在 Amazon ECS 集群上运行的应用程序，使用 AWS Fargate 启动类型。 配置应用程序以从数据流中读取数据，处理数据并存储数据。

**#141｜游戏计算密集且排行榜频繁刷新** → 计算优化EC2配ALB和ASG，ElastiCache Redis存排行榜

- C：创建一个计算优化的 Amazon EC2 按需实例的自动扩展组，位于应用负载均衡器后面。使 用 Amazon ElastiCache（Redis OSS）集群来维护排行榜。

**#164｜EKS无状态Pod突发扩展要均匀跨AZ** → 用基于可用区的Topology Spread Constraints铺开Pod

- D：配置工作负载以使用基于可用区的拓扑分布约束。

**#166｜EC2每十分钟扫S3且单文件五分钟并常空闲** → 改S3上传事件直接触发Lambda处理

- A：将数据处理脚本迁移到 AWS Lambda 函数。使用 S3 事件通知来调用 Lambda 函数，以便在 公司上传对象时处理这些对象。

**#178｜扩容新机装包慢导致响应延迟** → ASG用Warm Pool预热，生命周期钩子完成初始化后再接流量

- D：使用动态扩展策略。为自动扩展组启用预热池。使用生命周期挂钩来运行用户数据脚本。

**#210｜季节网站后端和DynamoDB同时变慢** → 后端上ASG，DynamoDB也开Auto Scaling

- C：为后台服务使用自动扩展组。使用 DynamoDB 自动扩展。

**#232｜传感器指标越界必须立即通知工厂** → Kinesis收流，Lambda分析阈值，SNS告警　〔区分词：Lambda〕

- C：将数据流传输到 Amazon Kinesis 数据流。创建一个 AWS Lambda 函数以消费 Kinesis 数据 流并分析数据。使用 Amazon 简单通知服务（Amazon SNS）通知运营团队。

**#233｜API变慢且日志显示DynamoDB调用出错** → 为DynamoDB表开Auto Scaling补吞吐

- B：在表上实施 DynamoDB 自动扩展

**#277｜媒体处理一小时且白天队列多夜间少** → SQS接任务，EC2 ASG按积压扩缩，处理结果存S3　〔区分词：SOS〕

- D：使用 Amazon SOS 创建一个队列。配置现有的 web 服务器以发布到新队列。使用 Amazon EC2 实例在 EC2 自动扩展组中从队列中提取请求并处理 文件。根据 SOS 队列长度扩展 EC2 实例。将处理后的文件存储在 Amazon S3 存储桶中。

**#278｜五台EC2互联要最低延迟而无需容错** → 同AZ Cluster Placement Group配增强网络

- A：将五个新的 EC2 实例启动到一个集群放置组中。确保 EC2 实例类型 支持增强型网络。

**#303｜欧洲往美东上传高分辨率图片慢** → 给S3开Transfer Acceleration

- C：配置存储桶以使用 S3 传输加速。

**#317｜坏订单消息反复报错拖住正常订单** → 给SQS配死信队列，把毒消息隔离出来分析

- D：将新的 SQS 标准队列配置为死信队列，以隔离故障消息。

**#328｜Lambda互相同步等待导致最前面函数超时** → Step Functions接管编排，拆掉函数套函数　〔区分词：Step Functions〕

- C：将解决方案转换为使用 AWS Step Functions 工作流来调用 Lambda 函数。移除直接的函数到 函数的调用。

**#333｜Spot只有一种规格导致扩容启动失败** → 启动模板改基于属性选实例，扩大可用Spot容量池

- D：创建一个使用基于属性的实例类型选择的新启动模板版本。配置自动扩展组以使用新的启动 模板版本。

**#335｜单一Spot实例型号供给不足** → 基于属性选实例，多型号容量池增加成功率

- B：创建一个使用基于属性的实例类型选择的新启动模板版本。配置自动扩展组以使用新的启动 模板版本。

**#376｜Beanstalk单实例Java常CPU85%以上** → 改多AZ负载均衡环境，CPU超85%五分钟就扩容

- C：修改现有环境的容量配置，以使用负载均衡环境类型。 选择所有可用区。添加一个扩展规则，当平均 CPU 利用率超过 85% 持续 5 分钟时运行。

**#395｜容器和Kafka自管太重且产品发布要弹性** → EKS Fargate加ALB，MSK托管Kafka，RDS读副本，S3加CloudFront发静态　〔区分词：EKS、Fargate、Kafka〕

- D：在 Amazon 弹性 Kubernetes 服务（Amazon EKS）上使用 AWS Fargate 部署应用程序，并 在应用负载均衡器后启用自动扩展。为数据库实例创建额外的只读副本。 创建一个 Amazon 管理的 Apache Kafka 集群，并配置应用服务以使用该集群。将静 态内容存储在 Amazon S3 中，后面有一个 Amazon CloudFront 分发。

**#412｜五千个同框架定制模型要低成本低延迟** → SageMaker多模型端点集中承载并自动扩缩（待核验）

- B：通过使用 Amazon SageMaker AI 多模型端点和推理组件来部署模型。 在集中式生产账户中启用自动扩展。

**#432｜ASG缩容前十五分钟日志没来得及传S3** → 终止Lifecycle Hook先挂起，SSM复制日志后CompleteLifecycleAction放行　〔区分词：Systems Manager、autoscaling: EC2_INSTANCE_TERMINATING、CONTINUE〕

- B：创建一个 AWS Systems Manager 文档，其中包含将日志文件复制到 Amazon S3 的脚本。创建一个 自动扩展生命周期挂钩和一个 Amazon EventBridge（Amazon CloudWatch 事件）规则，以检测 自动扩展组的生命周期事件。在 autoscaling: EC2_INSTANCE_TERMINATING 状态转换为调用 AWS 系统管理器 API SendCommand 操作以运行文档，复制日志文件并向自动扩展组发送 CONTINUE 以 终止实例。

**#459｜网页加RabbitMQ和Kubernetes不想大改上云** → EC2 ASG加ALB托前端，Amazon MQ保RabbitMQ协议，EKS托后端　〔区分词：Lambda〕（待核验）

- A：创建网页服务器虚拟机的 AMI 创建一个使用该 AMI 的 Amazon EC2 自动扩展组和一个应用 程序负载均衡器 设置 Amazon MQ 以替代本地消息队列 配置 Amazon 弹性 Kubernetes 服 务 (Amazon EKS) 来托管订单处理后端 创建一个自定义的 AWS Lambda 运行时以模拟网页

**#460｜生产测试各自容器化又想无服务器少运维** → 两套ECS Fargate服务配各自ALB，ECR供镜像并自动伸缩　〔区分词：ECS〕

- B：将容器镜像上传到 Amazon Elastic Container Registry (Amazon ECR)。配置两个自动扩展的 Amazon Elastic Container Service (Amazon ECS) 集群，使用 Fargate 启动类型以处理 预期负载。从 ECR 镜像中部署任务。配置两个独立的应用程序负载均衡器，将流量引导到 ECS 集群。

**#464｜中央事件代理向各账户微服务广播同事件** → EventBridge中央总线加资源授权，规则按服务转到各账户　〔区分词：EventBridge〕

- B：在中央账户中创建一个新的 Amazon EventBridge 事件总线，并赋予所需的权限。为每个微服 务添加按服务过滤的 EventBridge 规则。调用规则将事件路由到其他账户。

**#477｜股票表午夜批量写白天反复查少数键** → DAX缓存热点读，表改预置容量加自动伸缩

- D：部署 DynamoDB 加速器 (DAX)。使用预配置容量模式。配置 DynamoDB 自动 扩展。

**#496｜偶发API首请求比后续慢很多** → Lambda开Provisioned Concurrency并按利用率自动伸缩

- B：为 Lambda 函数配置预置并发。使用 AWS 应用程序自动扩展和 目标跟踪扩展策略根据使用情况管理并发。

**#499｜ASG异常机器一直被换掉来不及排查** → 先暂停Terminate进程，再Session Manager进故障机

- D：暂停自动扩展组的终止过程。使用会话管理器登录到标记为不健康的实例

**#513｜S3每晚数据量不定且容器处理几小时** → 上传事件启动Step Functions，编排Fargate任务，干完退出

- C：将工作负载迁移为在 AWS Fargate 上运行的 Amazon ECS 集群中的任务。创建一个 AWS Step Functions 状态机以调用 Fargate 任务。配置一个 Amazon EventBridge 规则 以在数据上传到 S3 存储桶时调用状态机。

**#527｜百万设备REST突发绝不能丢数据** → API Gateway服务集成直写SQS，Lambda从队列可靠消费　〔区分词：HTTP〕

- B：创建一个实现 RESTful API 的 Amazon API Gateway HTTP API。创建一个 Amazon SQS 队列 。创建一个与 SQS 队列的 API Gateway 服务集成。创建一个 AWS Lambda 函数来处理 SQS 队列中的消息。

**#564｜参数顺序大小写混乱导致CloudFront命中率低** → Viewer Request边缘函数先排序参数再统一小写　〔区分词：Lambda@Edge、Clo udFront〕

- A：部署一个 Lambda@Edge 函数，通过名称对参数进行排序，并强制将其转换为小写。选择 Clo udFront 观众请求触发器来调用该函数。

**#588｜订单间歇突发要松耦合低运维** → SQS接订单，Lambda自动消费后写DynamoDB　〔区分词：SQS、Lambda〕

- B：在 Amazon SQS 队列中接收订单，并调用 AWS Lambda 函数进行处理。

**#596｜事件处理自动扩缩且失败转专门队列** → SNS触发Lambda，异步On-failure Destination把失败送SQS　〔区分词：SNS〕

- A：将事件详细信息发送到 Amazon 简单通知服务 (Amazon SNS) 主题。将 AWS Lambda 函数配 置为 SNS 主题的订阅者以处理事件。为该函数添加一个失败时的目标。将 Amazon 简单队列服 务 (Amazon SQS) 队列设置为目标。

**#599｜ECR新镜像有高危漏洞就删标签并通知** → 推送扫描后EventBridge触发Step Functions，删高危标签再SNS告警　〔区分词：Notification〕

- A：在存储库上配置推送时扫描 使用 Amazon EventBridge 在扫描完成时调用 AWS Step Functions 状态机，针对具有严重或高严重性发现的镜像。使用 Step Functions 状态机删除这些镜像的标签，并通过 Amazon Simple Notification Service (Amazon SNS) 通知开发 团队。

**#641｜一主八工内存数据库要极低节点延迟** → 内存优化EC2放Cluster Placement Group

- C：在集群放置组中启动内存优化的 EC2 实例

**#653｜零售订单退货和分析要事件驱动近实时** → Fargate微服务、Aurora Serverless、Redshift Serverless，事件总线分发变化　〔区分词：EKS、Serverless、EventBridge〕（待核验）

- C：将各个应用程序作为微服务迁移到使用 AWS Fargate 的 Amazon EKS 容器。 将零售 MySQL 数据库迁移到 Amazon Aurora Serverless MySQL。将分析 数据库迁移到 Amazon Redshift Serverless。使用 Amazon EventBridge 将所有输入数据发送到 微服务和分析数据库。

**#660｜ASG缩容后日志消失没法分析** → 统一CloudWatch Agent持续把应用日志发CloudWatch Logs　〔区分词：EC2、CloudWatch、CloudWatch Logs〕

- B：配置 EC2 实例以使用统一的 CloudWatch 代理将日志发布到 Amazon CloudWatch Logs。

**#678｜天气API调用第三方失败会丢数据** → EventBridge主总线触发Lambda，异步失败目标送次总线保留后续处理

- C：创建两个 Amazon EventBridge 事件总线：一个主事件总线和一个次事件总线。更新 API 以 使用新的主事件总线集成。配置一个 EventBridge 规则以响应主事件总线上的所有事件。指定 Lambda 函数作为规则的目标。将次事件总线配置为 Lambda 函数的失败目标。

### 成本与计费

**#6｜固定EC2还跑三年又新增无服务器计算** → 老底座续三年全预付RI，新增用三年全预付Compute Savings Plans

- A：以全额预付的方式购买相同的预留实例，额外延长 3 年。 在管理账户中以全额预付的方式购买 3 年的计算节省计划，以覆盖 任何额外的计算成本。

**#23｜定时任务保SLA而临时任务可延迟** → 三AZ各三台按需配容量预留保底、各一台Spot接弹性活

- D：在所选的 AWS 区域中，将 12 个实例分布在三个可用区。每个可用区运行三个实例，作为按 需实例并带有容量预留。每个可用区运行一个实例，作为竞价实例。

**#24｜EMR每天跑六小时且完成时间宽松** → 题库记全节点Spot加任务后销毁，关键节点容错须核验　〔区分词：Spool〕（待核验）

- A：在实例集群中启动所有任务、主节点和核心节点的 Spool 实例。处理完成后终止集群，包括 所有实例。

**#25｜组织每日成本达预算80%要邮件** → 管理账户设每日Budgets，80%阈值用SNS通知　〔区分词：Budgets〕

- A：在组织的管理账户中，使用 AWS Budgets 创建一个具有每日周期的预算。添加警报阈值 并将值设置为 80%。使用 Amazon Simple Notification Service (Amazon SNS) 通知财 务团队。

**#50｜高内存EC2和EBS是否浪费要建议** → CloudWatch Agent补内存，Compute Optimizer给规格建议　〔区分词：Compute Optimizer〕

- C：在每个 EC2 实例上安装 Amazon CloudWatch 代理。开启 AWS Compute Optimizer，并让其 运行至少 12 小时。查看 Compute Optimizer 的建议，并按指示调整 EC2 实例的大小。

**#54｜跨账户找CPU内存闲置机器并缩容** → SSM装CloudWatch Agent，管理账户Cost Explorer看优化建议

- B：通过 AWS Systems Manager 在所有 EC2 实例上安装 Amazon CloudWatch 代理。 从组织的管理账户中通过 AWS Cost Explorer 获取资源优化建议。使用这些建议在 组织的所 有账户中缩减低利用率实例。

**#69｜EKS用Fargate且活动峰值可预测** → Compute Savings Plans保底、容量预留保峰，RDS RI配临时读副本

- B：为 EKS 集群的预测中等负载购买计算节省计划。根据活动日期使用按需容量预留扩展集群以 应对高峰。为数据库购买 1 年的无前期费用预留实例，以满足预测的基础负载。在高峰期间 临时扩展数据库读取副本。

**#72｜EC2和RDS要省钱但不能削可用性** → Compute Optimizer加Trusted Advisor先找闲置再调规格，计算底座买Savings Plans

- C：选择加入 AWS 计算优化器。使用计算优化器和 AWS Trusted Advisor 来识别 未充分利用的实例。实施计算优化器的建议，修改实例类型， 调整实例大小，并应用自动扩展组。购买计算节省计划。

**#89｜二十台常驻机器平时CPU10%峰时满载** → NLB后接ASG最小4最大28，四台底座买RI　〔区分词：4〕

- D：创建一个自动扩展组。将自动扩展组附加到 NLB 的目标组。将 最小容量设置为 4，最大容 量设置为 28。为四个实例购买预留实例。

**#132｜共享DynamoDB按租户真实消耗分账** → Lambda记租户和RCU/WCU，定时函数按消耗比例分摊总成本　〔区分词：RCUs、WCUs、AW S〕

- B：配置 Lambda 函数以记录租户 ID 以及每个事务从 DynamoDB 消耗的 RCUs 和 WCUs 到 A mazon CloudWatch Logs。部署另一个 Lambda 函数，通过使用记录的容量单位和来自 AW S 成本探索者 API 的整体 DynamoDB 成本来计算租户成本。创建一个 Amazon EventBridge 规则，以定期调用计算 Lambda 函数。

**#133｜组织EC2加Fargate加Lambda三年省钱** → 管理账户按组织建议买Compute Savings Plans

- B：从管理账户购买一个计算节省计划，使用管理账户级别的推荐。

**#135｜合规工具散在各账户却要精确归集合规成本** → 激活costCenter成本标签，管理账户每月CUR按标签汇总

- A：在组织的管理账户中，激活 costCenter 用户定义标签。配置每月的 AWS 成本和使用报告 以保存到管理账户中的 Amazon S3 存储桶。 使用报告中的标签明细获取标记为 costCenter 的资源的总成本。

**#217｜游戏全年必须在线但分析可中断** → 游戏买EC2 Instance Savings Plans，分析用Spot

- B：为在线游戏应用实例购买 EC2 实例节省计划。对分析应用使用 Spot 实例。

**#230｜Redshift只在每天短时摄取却按需节点贵** → 快照迁Redshift Serverless端点，应用切端点再删旧集群　〔区分词：64、RPU、Redsh ift Serverless、Serverless〕

- C：使用现有 Redshift 集群的最新快照创建一个具有 64 个 Redshift 处理单元（RPU）的新 Redsh ift Serverless 端点。更新内部应用程序以从新的 Redshift Serverless 端点中检索数据。删除现 有的 Redshift 集群。

**#294｜各部门计算要省钱又不限制规格选择** → 组织合并计费、部门标签分账、Compute Savings Plans保灵活性

- C：配置 AWS Organizations 以使用合并计费。实施一个标记策略，以识别 部门。使用标签编辑器将标签应用于适当的资源。购买计算节省计划。

**#337｜每两周导出Lambda推荐内存与成本差** → EventBridge定时调Lambda，Compute Optimizer导出建议CSV到S3　〔区分词：ExportLambdaF unctionRecommendations、csv〕

- B：选择加入 AWS Compute Optimizer。创建一个调用 ExportLambdaF unctionRecommendations 操作的 Lambda 函数。将 _csv 文件导出到 S3 存储桶。创建一 个 Amazon EventBridge 规则，安排 Lambda 函数每 2 周运行一次。

**#365｜HR买的RI优惠不能被其他部门用** → 管理账户在Billing关闭HR生产账户RI折扣共享

- C：在AWS计费和成本管理控制台中，使用组织的管理账户关闭人力资源部门的生产AWS账户的RI 共享。

**#366｜S3大批模拟可中断且完成不赶时间** → Batch用Spot计算环境，容量优化分配减少中断

- B：创建一个包含 Amazon EC2 Spot 实例的 AWS Batch 计算环境。指定 SPOT_CAPACITY_OPTIMIZED 分配策略。

**#373｜DynamoDB每周四小时峰值且写多读少要省钱** → 题库按需加DAX须核验，DAX并不解决写入容量成本（待核验）

- D：在表前配置 DynamoDB 加速器 (DAX)。为表配置按需容量模式 。

**#397｜EC2用量比近30天均值高10%要每日提醒** → 原题选Cost Anomaly Detection，但精确用量阈值应核验（待核验）

- B：配置警报以通知架构团队如果达到使用阈值。在组织的管理账户中配置 AWS 成本异常检测 。配置监控类型为 AWS 服务。应用 Amazon EC2 的过滤器。配置警报订阅以通知架构团 队如果使用量比过去 30 天的平均使用量多 10%。

**#414｜EC2稳定Lambda波动且MemoryDB常驻** → EC2买实例节省计划，Lambda仅覆盖最低Compute承诺，MemoryDB买预留节点

- A：购买一个 EC2 实例节省计划以覆盖 EC2 实例。购买一个计算节省计划 以覆盖 Lambda 函数的最低预期消耗。购买预留 节点以覆盖 MemoryDB 缓存节点。

**#428｜收购后团队分组混乱要统一成本报告** → CUR加标签和Cost Categories，Athena建表，QuickSight给财务看　〔区分词：At hena、Athena〕

- A：为该组织创建一个 AWS 成本和使用报告。在报告中定义标签和成本类别。 在 Amazon At hena 中创建一个表。基于 Athena 表创建一个 Amazon QuickSight 数据集。与财务团队共 享该数据集。

**#445｜生产稳定全年跑而开发测试晚间周末关** → 生产数据库买一年RI，持续计算底座买一年Compute Savings Plans

- B：在组织管理账户中，为生产环境数据库购买1年期的预留实例。购买一个1年的计算节省 计划，以满足计算使用需求。

**#465｜特定成员账户只准指定区域且统一标签** → 单独OU挂区域SCP和标签策略　〔区分词：OU〕

- D：将特定成员账户与新的组织单元（OU）关联。应用标签策略和服务控制策略（SCP） ，使用条件限制区域。

**#486｜高级客户收到429而Lambda完全没被调** → 先查API Gateway账户级每秒请求配额

- C：该公司达到了其 API Gateway 账户每秒调用的限制。

**#517｜禁止没Project标签的新EC2及附属EBS** → SCP在RunInstances同时覆盖实例卷，RequestTag/Project为空就拒绝　〔区分词：c2:RunInstances〕

- A：创建一个 SCP，当 aws:RequestTag/Project 条件键为空时，拒绝 EC2 实例和 EBS 卷资源的 e c2:RunInstances。

**#538｜EC2使用高于三十天平均10%需通知** → 原题选成本异常检测，精确用量比较须另核验（待核验）

- B：在组织的管理账户中配置 AWS 成本异常检测。配置 AWS 服务的监控类型。应用 Amazon EC2 的过滤器。配置警报订阅以通知架构团队，如果使用情况比过去 30 天的平均使用情况高 出 10%。

**#542｜生产EC2和RDS不能降可用性却要省钱** → Compute Optimizer和Trusted Advisor找闲置，调规格伸缩并买计算节省计划

- C：使用计算优化器和可信顾问获取建议。应用资源调整、自动扩展，并购买计算节省计划。

**#543｜各业务单元每月支出报告还要超额提醒** → Cost Explorer出月报，Budgets按账户标签设阈值经SNS通知　〔区分词：Exp lorer〕

- B：在组织的主账户中配置 AWS Budgets，并配置按应用程序、环境和所有者分组的预算警报 。将每个业务单元添加到每个警报的 Amazon SNS 主题中。在组织的主账户中使用 Cost Exp lorer 为每个业务单元创建每月报告。

**#554｜全部开发账户合计预测月成本超限就邮件** → 管理账户Budgets筛开发关联账户，预测阈值发SNS　〔区分词：Budgets〕

- C：使用 AWS Budgets 在组织的管理账户中创建成本预算。将每个开发账户配置为关联账户。配 置警报阈值。为电子邮件警报配置 SNS 主题。

**#567｜CloudFormation部署Fargate任务规格过大** → Compute Optimizer建议CPU内存，更新任务定义后重部署

- A：启用 AWS Compute Optimizer。识别被分类为过度配置的资源。更新 CloudFormation 任务定义，以使用 Compute Optimizer 推荐的任务大小。重新部署 CloudFormation 模板。

**#577｜ECS EC2共享集群要把主机费按业务任务分摊** → 开启Split Cost Allocation Data，CUR结合任务标签分EC2成本

- B：在 AWS 成本探查器中启用拆分成本分配数据。创建一个 AWS 成本和使用报告，使用标签将 EC2 成本分配给相应的业务组。

**#578｜EC2未来两年逐步改Lambda但整体稳定三年** → 每年审建议买一年Compute Savings Plans，兼容EC2转Lambda

- A：每年在 AWS 成本管理中评估节省计划建议。根据建议购买 1 年期计算节省计划。

**#639｜各资源CostCenter标签已打好要精确分账** → 管理账户激活成本标签，CUR落S3后按团队标签汇总

- A：在管理账户中激活 CostCenter 用户定义标签。配置每月的 AWS 成本和使用报告以保存 到管理账户中的 Amazon S3 存储桶。 使用报告中的标签细分获取具有 CostCenter 标签的资源的总成本。

### 部署与治理

**#12｜仓库订单要等员工扫码才发货** → DynamoDB记订单、Step Functions等交棒、Lambda扫码后收尾　〔区分词：DynamoDB、Step Functions〕

- C：更新应用程序以将新订单信息存储在 Amazon DynamoDB 中。当创建新订单时，触发一个 AWS Step Functions 工作流，将订单标记为“进行中”，并打印一个 包裹标签到仓库 。一旦标签被扫描并完成，应用程序将触发一个 AWS Lambda 函数，该函数将订单标记 为已发货并完成工作流。

**#36｜同名角色删建后跨账户AssumeRole失败** → 刷新父账户目标角色的信任策略，重新引用源角色ARN　〔区分词：ARN〕

- A：在父账户中编辑 EC2 实例需要承担的角色的信任策略。确保允许 sts AssumeRole 操作的现有 语句中的目标角色 ARN 是正确的。保存信任策略。

**#38｜Lambda新版先让小部分用户试用** → 版本别名加routing-config权重做金丝雀　〔区分词：update-alias〕

- A：为每个新部署的 Lambda 函数版本创建一个别名。使用 AWS CLI update-alias 命令和 routing-config 参数来分配负载。

**#42｜手工VPC以后归CloudFormation管** → 按现状写模板，再把现有资源导入堆栈

- C：创建一个新的 CloudFormation 模板，严格配置现有的 VPC 资源和 配置。从 CloudFormation 控制台，通过导入现有资源创建一个新的堆栈。

**#101｜组织所有账户自动部署SNS和后续新账户** → 管理账户建服务托管权限StackSets，部署到组织并开自动部署

- C：在 Organizations 管理账户中创建一个堆栈集。使用服务管理权限。设置部署选项以部署 到组织。启用 CloudFormation StackSets 自动部署。

**#107｜ASG实例不断变化却手动装CodeDeploy** → AMI预装代理，启动模板用新AMI，部署组直接关联ASG

- D：创建一个安装了 CodeDeploy 代理的新 AMI。配置自动扩展组的启动模板以使用新的 AMI。将 CodeDeploy 部署组与自动扩展组关联，而不是与 EC2 实例关联。

**#116｜Fargate微服务要蓝绿发布且自动增减任务** → ECS加ALB和蓝绿部署，任务数用Service Auto Scaling（待核验）

- C：将 ECS 服务配置为使用蓝绿部署类型和应用负载均衡器。 通过使用集群自动扩展器为每个 ECS 服务实施自动座位组。

**#140｜GitHub加Jenkins要自动构建和零停机回滚** → Webhook触发CodePipeline，测试失败SNS报警，CodeDeploy蓝绿发布　〔区分词：Jenkins〕

- B：使用 GitHub Webhook 触发 CodePipeline 管道，使用 Jenkins 插件进行 AWS CodeBuild 的 单元测试，将任何失败的构建发送警报到 Amazon SNS 主题，使用 AWS CodeDeploy 进行蓝 绿部署。

**#145｜发现漏洞后快速补丁且出错能回滚** → CodePipeline接CodeBuild，CodeDeploy蓝绿切换和回滚

- B：配置 CodePipeline，使用配置为蓝绿部署的 AWS CodeDeploy 部署阶段。监控新部署 的代码，如果出现任何问题，使用 CodeDeploy 触发手动回滚。

**#186｜Step Functions要长等人工审批且不浪费计算** → 回调任务发Task Token，授权完成后带令牌回来续跑（待核验）

- B：配置一个任务状态，使用回调模式提供唯一的关联令牌，并仅在外部系统在批准后返回该令牌时恢复 执行。

**#196｜新区域StackSets含命名IAM角色却全失败** → 先启用各账户区域，再声明CAPABILITY_NAMED_IAM

- A：在所有相关账户中启用新区域。在创建堆栈集时指定 CAPABILITY_NAMED_IAM 功能。

**#198｜新账户创建后自动上安全控制和账单告警** → Account Factory建账户，生命周期事件触发Lambda用执行角色部署模板　〔区分词：Service Catalog、Lambda、Lambd、CloudFormation、AWSControlTowerExecution〕

- C：使用账户工厂通过 AWS Service Catalog 启动新 AWS 账户的创建。 在 AWS Control Tower 中配置一个生命周期事件，以调用 AWS Lambda 函数。配置 Lambd a 函数以使用 AWS CloudFormation 模板进行部署。 AWSControlTowerExecution 角色。

**#268｜Lambda发布不能一次把用户全切新版** → 版本别名配routing-config权重金丝雀　〔区分词：update-alias、routing -config〕

- A：为每个新部署的 Lambda 函数版本创建一个别名。使用 AWS CLI update-alias 命令和 routing -config 参数来分配负载。

**#286｜所有组织账户部署SNS主题并覆盖新账户** → 管理账户StackSets用服务托管权限并开自动部署

- C：在 Organizations 管理账户中创建一个堆栈集。使用服务管理权限。设置部署选项以部署 到该组织。启用 CloudFormation StackSets 自动部署。

**#308｜新模型先给10%用户试且想少管机器** → SageMaker无服务器推理，API Gateway金丝雀九旧一新　〔区分词：Gatew ay〕

- D：将模型版本部署到 Amazon SageMaker 无服务器推理终端节点。使用 Amazon API Gatew ay 进行金丝雀部署，逐步将 10% 的流量转移到新模型版本，同时保持 90% 的流量在之前 版本上。

**#369｜Beanstalk已建新环境并部署完新版** → 交换环境URL完成蓝绿切换　〔区分词：URL〕

- B：选择交换环境 URL 选项

**#374｜AI代理新版评估不过不准上线且上线后监控** → AgentCore Evaluations评黄金轨迹阻回归，在线评估加定期人工抽检

- C：配置代理跟踪日志。将 Amazon Bedrock AgentCore 评估添加到管道中，以便使用内置和 自定义评估器进行按需评估。在部署后启用在线评估。 定期审查抽样的会话子集。

**#375｜不可改Linux二进制每四小时跑二十分钟** → 打包Fargate任务，EventBridge每四小时启动　〔区分词：Fargate、EventBridge、Events〕

- C：使用 AWS Fargate 运行该应用程序。使用 Amazon EventBridge（Amazon CloudWatch Events） 每 4 小时调用一次 Fargate 任务。

**#377｜必须在CloudFormation部署前阻止不合规资源** → CloudFormation Hooks逐规则验证，StackSets注册，SCP和IAM防篡改　〔区分词：Hooks、StackSets、Hoo ks、IAM、Hook〕

- B：使用 CloudFormation Hooks 实现配置规则。使用单独的 AWS Lambda 函数来强制执 行每个规则。使用 CloudFormation StackSets 在组织中的所有成员账户中部署和注册 Hoo ks。使用 SCP 和 IAM 策略防止成员账户中的 Hook 修改和 Lambda 函数更改。

**#392｜CloudFormation资源必须带合规Project标签** → 标签策略限制取值，SCP拒绝无Project标签的CreateStack　〔区分词：cl oudformation:CreateStack〕

- A：创建一个标签策略，在组织的管理账户中包含允许的项目标签值。创建一个 SCP，拒绝 cl oudformation:CreateStack API 操作，除非添加了项目标签。将 SCP 附加到每个 OU。

**#405｜Lambda发布要更快发现问题并自动回滚** → SAM加CodeDeploy渐进切流，前后置测试加CloudWatch告警回滚　〔区分词：SAM、CodeDeploy、CloudWatch〕

- B：使用 AWS SAM 和内置的 AWS CodeDeploy 部署新的 Lambda 版本，逐步将流量转移到新 版本，并使用流量前和流量后测试函数来验证代码。如果触发 Amazon CloudWatch 警报， 则回滚。

**#411｜现有基础设施要代码化并跨账户跨区部署** → Organizations配CloudFormation StackSets重复部署模板　〔区分词：StackSets〕

- C：使用 AWS Organizations 和 AWS CloudFormation StackSets，从具有必要 IAM 权限的 账户部署 CloudFormation 模板。

**#426｜Beanstalk要每小时多次发布且快速回滚** → 部署次环境，交换环境URL切新版，出错交换回去　〔区分词：Elastic Beanstalk、CI /CD、URL〕

- B：指定 AWS Elastic Beanstalk 作为应用程序 CI /CD 管道的部署目标的次要环境。要部署，请交换暂存和生产环境的 URL。

**#449｜两个推荐模型做均匀A/B测试** → 同一SageMaker实时端点部署两变体，各权重0.5

- C：将两个变体部署到 Amazon SageMaker AI 实时推理端点。在端点配置中，将每个模型 变体的权重设置为 0.5。在电子商务应用中，调用推理端点。

**#455｜复杂CloudFormation变更常引停机** → CodeBuild先测试、Change Set审变更、CodeDeploy蓝绿可回滚　〔区分词：CodeBuild〕

- B：在测试环境中使用 AWS CodeBuild 实现自动化测试。使用 CloudFormation 变更集在 部署前评估更改。使用 AWS CodeDeploy 利用蓝绿部署模式进行评估，并在需要时能够 撤销更改。

**#560｜AI代理高风险动作需人工审批五到六十分** → Step Functions Task Token暂停，SNS通知，授权回调决定继续或取消　〔区分词：Step Functions〕

- B：配置一个 AWS Step Functions 工作流程来调用代理。当代理识别到高风险操作时，使用任务 令牌回调模式 暂停工作流程。通过 Amazon SNS 将任务令牌发送给审批者。当审批者用任务 令牌回复时，恢复或取消工作流程。

**#562｜每个新账户都手动提EC2配额工单** → 管理账户配Service Quotas请求模板并关联组织

- B：在组织的管理账户中创建一个服务配额请求模板。配置请求模板以请求配额增加。将请求 模板与组织关联。

**#613｜基础设施CI/CD要测试扫描报警和人工批准** → CodeBuild测与扫，EventBridge加SNS报失败，CDK管理功能，人工批准再发布　〔区分词：CodeBuild、EventBridge、CDK〕

- A：使用 AWS CodeBuild 进行测试和扫描。使用 EventBridge 和 SNS 进行警报。使用 AWS CDK 与清单切换功能。使用手动批准阶段。

**#614｜QA要自助启动环境但不能拿经理广权限** → Service Catalog产品加Launch Constraint，以服务角色代用户部署　〔区分词：Service Catalog〕

- B：从环境模板创建 AWS Service Catalog 产品。为该 产品添加启动约束，使用现有经理部门的权限，仅允许使用 AWS Service Catalog API。 培训用户从 AWS Service Catalog 控制台启动模板。

**#627｜Git PR要自动出变更集批准合并后部署** → CloudFormation Git Sync连接仓库并自动同步模板更新　〔区分词：Git〕

- B：使用 CloudFormation Git 同步将 CloudFormation 与代码库链接。为拉取请求更新配置自动更改 集创建。配置 CloudFormation 在拉取请求被批准并合并时发布更改集摘要并 应用更新。

**#637｜RDS快照要六小时一次留三十天且跨账户统一看** → Backup跨账户管理，标签选资源，计划六小时频次三十天保留　〔区分词：Backup〕

- A：在 AWS Backup 中启用跨账户管理功能。创建一个备份计划，指定频率和保留要求。为数据库 实例添加标签。通过使用标签应用备份计划。使用 AWS Backup 监控备份的状态。

**#676｜.NET三层网站要双区域扩展高可用** → 各区独立Beanstalk加ALB，Aurora多AZ及跨区副本，Route 53地理邻近分流　〔区分词：MySQ L〕（待核验）

- C：使用 AWS Elastic Beanstalk 创建一个自动扩展的网络服务器环境，该环境跨越两个独立的区 域，每个区域都有一个应用程序负载均衡器（ALB）。创建一个 Amazon Aurora MySQ L 数据库集群的多可用区部署，并具有跨区域只读副本。使用 Amazon Route 53 和地理邻近 路由策略在两个区域之间路由流量。

### 高可用与灾备

**#14｜两区域素材要最近访问和主备** → 题库选CloudFront源组，但按最近区域选源须核验（待核验）

- A：创建一个 Amazon CloudFront 分发。为每个 ALB 创建一个源组，每个源一个源。将 其中一个源设置为主源。

**#32｜VMware专有应用灾时上云再切回且RPO五分** → Elastic Disaster Recovery持续块复制，灾时启动EC2

- B：配置 AWS 弹性灾难恢复将数据复制到附加到 Amazon Elastic Block Store（Amazon EBS）卷 的复制 Amazon EC2 实例。当本地环境不可用时，使用弹性灾难恢复启动使用复制 卷的 EC2 实例。

**#41｜灾时四百人用原AD和MFA远程办公** → WorkSpaces给桌面、VPN连本地、AD Connector接身份、RADIUS做MFA　〔区分词：Conn ector、RADIUS〕

- C：使用 Amazon WorkSpaces 作为云桌面服务。设置与本地 网络的 VPN 连接。创建 AD Conn ector，并连接到本地 Active Directory。为 MFA 配置 RADIUS 服务器。

**#51｜MSK要同AZ低延迟和快速扩容** → 换Express代理，客户端client.rack设AZ标识　〔区分词：client.rack、az〕

- C：用使用快速大型实例的快速代理替换标准代理。将 Kafka 客户端的 client.rack 属性设置为 az _id。

**#58｜10TB数据库跨区要求RPO五分RTO二十分** → 跨区只读副本先复制，告警触发Lambda提升为主　〔区分词：CloudWatch、Lambda〕

- B：在次要区域中部署一个 Amazon RDS 多可用区数据库集群，并设置一个跨区域的只读副本。 使用 Amazon CloudWatch 警报调用一个 AWS Lambda 函数，在发生故障时将只读副本提升 为主副本。

**#77｜网站主区多AZ扩缩并跨区主备** → 两区各配ALB加ASG，Route 53健康检查做故障转移

- C：在 us-east-1 创建一个 VPC，在 us-west-1 创建一个 VPC。在 us-east-1 VPC 中，创建一个 跨越该 VPC 中多个可用区的应用负载均衡器（ALB）。创建一个自动扩展组，将 EC2 实例 部署在 us-east-1 VPC 中的多个可用区。将自动扩展组放置在 ALB 后面。在 us-west-1 VPC 中 设置相同的配置。创建一个 Amazon Route 53 托管区域。为每个 ALB 创建单独的记录。启用 健康检查并为每个记录配置故障转移路由策略。

**#96｜CloudFront后跨区主备不能等DNS超过一分钟** → 源组直接做源站故障转移，减少依赖DNS切换

- D：创建一个 CloudFront 源组，其中包括两个源，每个后端服务区域A. 将源故障转移配置 为 CloudFront 分发的缓存行为。

**#147｜排行榜要微秒读毫秒写并持久化** → MemoryDB多AZ，应用访问主节点　〔区分词：MemoryDB〕

- C：在多可用区模式下创建一个 Amazon MemoryDB 集群。配置应用程序与 主节点进行交互。

**#148｜API加Aurora Serverless v1要五分钟恢复一分钟丢失** → 改Aurora Global Database，两区应用主备预部署（待核验）

- D：将 Aurora Serverless VI 数据库更改为标准的 Aurora MySQL 全球数据库，该数据库跨 源区域和目标区域扩展。在目标区域启动解决方案。配置 两个区域解决方案以在主动-被动配置中工作。

**#189｜Aurora跨区灾备但平时备区不准跑数据库实例** → Aurora Global Database建Headless无头次级集群

- C：在第二个区域创建一个无头 Aurora 数据库集群，该集群是与主区域的数据库集群属于同一全 球数据库集群的一部分。

**#207｜CloudFront后单区域网站要容错** → 另一区复制ALB和ASG，再用CloudFront源组做主备

- B：在不同的 AWS 区域中配置一个 ALB、一个自动扩展组和 EC2 实例。更新 CloudFront 分发，并为新的 ALB 创建第二个源。为这两个 源创建一个源组。将一个源配置为主源，另一个源配置为次源。

**#211｜S3读写应用要同时部署两区域** → 两桶双向CRR配S3 Multi-Region Access Point

- B：在第二个区域创建一个新的 S3 存储桶。设置原始 S3 存储桶与新 S3 存储桶之间的双向 S3 跨 区域复制 (CRR) 配置一个使用两个 S3 存储桶的 S3 多区域访问点。将修改后的应用程序部署到 两个区域。

**#229｜欧美报告九成只读且欧洲下载要低延迟** → 欧洲建RDS跨区只读副本，API用Route 53延迟路由

- C：为新区域的RDS数据库配置跨区域只读副本。将Route 53记录更改为基于延迟的路由，以连 接到API网关API。

**#244｜Oracle含存储过程要少停机迁托管库** → SCT转模式和过程，DMS持续搬数据到Aurora PostgreSQL　〔区分词：Aurora PostgreSQL、SCT、Aurora〕

- D：使用 AWS DMS 将数据从本地 Oracle 数据库复制到新的 Amazon Aurora PostgreSQL 数 据库。使用 AWS SCT 转换模式和存储过程。将应用程序重定向到 Aurora 数据库集群。

**#264｜Grafana现有面板保留且坏机十分钟内恢复** → AMI预装Grafana，EFS存面板，ASG一台自动补机配跨AZ ALB　〔区分词：AMI、EF S〕

- C：创建一个预装 Grafana 的 AMI。将现有仪表板存储在 Amazon 弹性文件系统（Amazon EF S）中。创建一个使用新 AMI 的自动扩展组。将自动扩展组的最小、期望和最大实例数设 置为 1。创建一个至少服务于两个可用区的应用负载均衡器。

**#299｜Connect呼叫中心要跨区域灾备** → 备区预建用户与流程，健康告警触发Lambda和模板准备号码　〔区分词：Clo udFormation〕（待核验）

- D：在第二个区域中配置一个新的 Amazon Connect 实例，包含所有现有用户和联系流。 为 Amazon Connect 实例的 URL 创建一个 Amazon Route 53 健康检查。为失败的健康检 查创建一个 Amazon CloudWatch 警报。创建一个 AWS Lambda 函数以部署一个 AWS Clo udFormation 模板，该模板配置已声明的电话号码。配置警报以调用 Lambda 函数。

**#301｜网站跨区灾备数据库RPO小于一分钟** → MySQL迁Aurora Global Database，美东主美西副　〔区分词：us-east-1、Aur ora〕

- B：将数据库迁移到一个在 us-east-1 的主数据库和在 us-west-2 的副数据库的 Amazon Aur ora 全球数据库。

**#344｜已知日期的售票峰值数据库也要提前放大** → EC2计划伸缩，Aurora先建大副本切主，售后再缩　〔区分词：Auror〕

- D：为 EC2 实例使用计划扩展策略。将数据库托管在 Amazon Aurora PostgreSQL 多可用 区数据库集群上。创建一个 Amazon EventBridge 规则，调用一个 AWS Lambda 函数，在 销售事件之前创建一个更大的 Aurora 副本。切换到更大的 Aurora 副本。 创建另一个 EventBridge 规则，调用另一个 Lambda 函数，在销售事件之后缩减 Auror a 副本。

**#371｜MySQL被财务查询拖慢又要跨区灾备** → 跨区读副本兼做报表和灾备，AMI及S3也复制，灾时提升副本

- C：在单独区域创建 RDS 数据库实例的只读副本。指示财务团队对只读副本运行查询。创建托 管应用程序前端的 EC2 实例的 AMI - 将 AMI 复制到单独区域。从原始 S3 存储桶到单独区域 的新 S3 存储桶使用 S3 跨区域复制（CRR）。在灾难发生时，将只读副本提升为独立的数据 库实例。从 AMI 启动 EC2 实例并创建 ALB，以向最终用户展示应用程序。配置应用程序 指向新的 S3 存储桶。

**#389｜EC2电商跨区复制加快全球访问** → CloudFormation复制栈，Route 53延迟路由，DynamoDB全球表　〔区分词：CloudFormation〕

- A：使用 CloudFormation 部署到第二个区域。使用 Route 53 基于延迟的路由。启用 DynamoDB 中的全球表。

**#404｜Linux共享文件要多AZ和跨区RPO一小时** → EFS Regional加预置吞吐，EFS Replication复制到灾备区　〔区分词：Elastic File System、EFS) Multi-AZ、75〕

- A：部署一个新的 Amazon Elastic File System (Amazon EFS) Multi-AZ 文件系统。将文件系 统配置为 75 MiBps 的预配置吞吐量。实现对 DR 区域中文件系统的复制。

**#415｜ECS加Aurora和DynamoDB灾备可丢两小时四小时恢复** → Backup按目标跨区备份，API区域端点和DNS故障转移配恢复流程　〔区分词：Backup〕

- C：使用 AWS Backup 在次要 AWS 区域创建 Aurora 数据库和 DynamoDB 数据库的备份。 在主区域和次要区域，配置一个带有区域端点的 API Gateway API。实施 Amazon Rou te 53 故障转移路由，将流量从主区域切换到次要区域。

**#446｜CodeCommit仓库要第二区域备份** → 原答案AWS Backup需核验，可用Git镜像定时跨区域备份　〔区分词：Backup〕（待核验）

- B：使用 AWS Backup 每小时备份一次 CodeCommit 存储库。在第二个区域创建跨区域副本。

**#447｜备用区ASG为零且跨区RDS副本要十五分钟恢复** → 健康告警触发Lambda提升副本和扩ASG，Route 53故障转移　〔区分词：Web、Simple Notification Service、SNS〕

- B：在备份区域创建一个 AWS Lambda 函数，以提升只读副本并修改自动扩展组的值。 使用 健康检查配置 Route 53，监控 Web 应用程序，并在健康检查状态不健康时向 Lambda 函数 发送 Amazon Simple Notification Service (Amazon SNS) 通知。 更新应用程序的 Route 53 记录，使用故障转移策略，在发生健康检查失败时将流量路由到备份区域的 ALB。

**#468｜CloudFront视频双桶主备要求一秒开始切换** → 源组主备加连接超时1秒和尝试1次

- C：在现有的 CloudFront 分发中创建一个新的源。将第二个 S3 存储桶指定为新的 源。创建一个源组。将原始源添加为主要源。将新源添加为 次要源。更新默认缓存行为以使用源组。将源连接 超时值设置为 1。将源连接尝试值设置为 1。

**#478｜主区和Pilot Light灾备漂移拖慢恢复** → StackSets同版部署、Image Builder同步AMI、Config检测修复、秘密跨区复制　〔区分词：IAM、EventBridge、System s、Secrets〕

- A：在两个区域中部署 CloudFormation 跨区域堆栈集。实施服务控制策略 (SCP) 和 IAM 策略以 限 制基础设施修改。使用 Amazon EC2 镜像构建器创建 AMI 并将其分发到灾难恢复区域。配 置两个区域中的 AWS Config 规则。设置 Amazon EventBridge 规则，以调用 AWS System s Manager 自动化运行手册，在检测到漂移时进行修复。将应用程序配置存储在 AWS Secrets Manager 中，并启用跨区域复制。

**#482｜WorkSpaces在两区域已部署要故障转移** → 两区Connection Alias关联目录，Route 53故障转移引导入口　〔区分词：R oute〕

- A：在主区域和故障转移区域创建连接别名。将每个别名与其区域中的目录关联。创建一个 R oute 53 故障转移路由策略，评估目标健康状态 = 是。

**#489｜旧.NET要容器化但还得管OS补丁和存储** → App2Container打包，ECS EC2启动型接ALB，SQL Server放RDS　〔区分词：ALB〕

- A：使用 App2Container 在带有 ALB 和 RDS 的 ECS EC2 上部署 SQL Server。

**#490｜DynamoDB交易平台要低延迟高可用** → 三节点DAX分散AZ，热点读走DAX、写直接进表

- B：创建一个三节点的 DynamoDB 加速器 (DAX) 集群。配置应用程序通过 DAX 读取数据，并直 接将数据写入 DynamoDB 表。

**#503｜Cluster Placement Group加机报容量不足** → 整体停止再启动让组重新获得紧邻容量，再尝试扩机（待核验）

- B：停止并启动放置组中的所有实例。再次尝试启动。

**#504｜有状态Web跨区要求两分钟RPO** → 原备份快照方案不能当然保证两分钟，须核验连续复制及恢复流程　〔区分词：B ackup〕（待核验）

- B：配置 EC2 实例以使用 Amazon 数据生命周期管理 (Amazon DLM) 来对 EBS 卷进行快照。配置 RDS 自动备份。配置备份复制到第二个 AWS 区域。在第二个区域创建 ALB。创建 AWS 全球加 速器端点，并 将端点与 ALB 关联。更新 DNS 记录以指向全球加速器端点。 在 AWS B ackup 中为 EC2 实例和 RDS 数据库实例创建备份计划。配置备份 复制到第二个 AWS 区域。

**#506｜ECS电商跨区五分钟RPO十五分钟RTO还要防篡改** → ECR复制、备用Fargate、Aurora全球库、备份合规锁、S3保护复制、DNS主备　〔区分词：Back up〕

- C：设置 ECR 跨区域复制。创建一个新的 ECS 部署，使用 Fargate 启动类型。 将数据库集群迁移到 Aurora 全球数据库。创建一个符合合规模式的备份库和一个 AWS Back up 中的备份计划。为 Amazon S3 启用时间点恢复和跨区域复制。在主要区域设置 Route 53 主记录，并使用故障转移路由策略设置次要记录。

**#531｜空气传感器要两区都能采集和存储** → IoT Core各区域配置配DNS故障转移，DynamoDB全球表

- C：为每个区域创建 AWS IoT Core 的域配置。创建一个评估域配置健康状况的 Amazon Route 53 健康检查。创建一个故障转移路由策略，使用来自 AWS IoT Core 域配置的域名作为值。 将 DynamoDB 表更新为全局表。

**#551｜EC2网站要三十秒RPO十分钟RTO跨区灾备** → DRS持续复制EC2，RDS跨区副本，备用小容量热身后DNS切流（待核验）

- B：使用基础设施即代码 (IaC) 在 DR 区域中配置新基础设施。为数据库实例创建一个跨区域的只 读副本。设置 AWS 弹性灾难恢复以持续复制 EC2 实例到 DR 区域。在 DR 区域以最低 容量运行 EC2 实例。在发生灾难时，使用 Amazon Route 53 故障转移路由策略自动切换到 DR 区域。增加自动扩展组的期望容量。

**#557｜支付ECS和Aurora都在一个AZ** → Fargate任务跨多AZ，Aurora另AZ加副本　〔区分词：Fargate、Multi-AZ〕

- C：在 AWS Fargate 上配置 Amazon ECS 服务，以在多个可用区分配任务。通过在第二个可 用区添加一个只读副本，将 Aurora 数据库修改为 Multi-AZ 数据库集群。

**#573｜备用区域DynamoDB和MySQL必须独立工作** → DynamoDB全球表复制数据，RDS跨区只读副本灾时提升　〔区分词：DynamoDB〕

- A：使用 DynamoDB 全球表和 RDS 只读副本。

**#575｜数百Windows加共享盘需十五分恢复五分丢失** → 服务器用DRS原生故障转移回切，共享文件用FSx并核验复制周期　〔区分词：FSx、File Server〕（待核验）

- D：使用 AWS 弹性灾难恢复来复制本地服务器。通过 AWS DataSync 将数据复制到 Amazon FSx for Windows File Server 文件系统。将文件系统挂载到 AWS 服务器。在灾难发生时，将本地服务器故障转移到 AWS。通过弹性灾难恢复故障恢复到新的或现有的 服务器。

**#593｜游戏资产和分数要多区域少改动** → S3跨区复制配CloudFront源组，DynamoDB加全球表副本　〔区分词：mazon、Streams〕

- C：在一个新的区域创建另一个 S3 存储桶，并在存储桶之间配置 S3 跨区域复制。创建一个 A mazon CloudFront 分发，并配置两个源的源故障转移，访问每个区域中的 S3 存储桶。 通过启用 Amazon DynamoDB Streams 配置 DynamoDB 全局表，并在一个新的区域添加 一个副本表。

**#597｜WorkSpaces只许公司分支办公室登录** → IP Access Control Group白名单各分支公网IP并关联目录　〔区分词：IP〕

- A：创建一个包含分支办公室公共地址列表的 IP 访问控制组规则。 将 IP 访问控制组与 Workspaces 目录关联。

**#610｜桌面客户端慢且本地多层服务可用性不足** → Aurora PostgreSQL托数据，EC2 ALB加ASG托后端，AppStream让客户端靠近应用　〔区分词：Aurora、Amaz、AppStream 2.0〕

- B：将数据库迁移到 Amazon RDS Aurora PostgreSQL 配置。将应用程序和表示层托管在 Amaz on EC2 实例上的自动扩展配置中，并通过应用程序负载均衡器进行负载均衡。使用 Amazon AppStream 2.0 来改善用户体验。

**#629｜EBS快照每天还要多存两个区域** → DLM生命周期策略定时复制到两个目标区域　〔区分词：Data Lifecycle Manager、DLM〕

- A：在 Amazon Data Lifecycle Manager (Amazon DLM) 中配置一个每天运行一次的策略，以将 EBS 快照复制到额外的区域。

**#635｜Lambda高峰可靠性差还要并发阈值提醒** → 预置并发预热，Route 53健康故障转移，ConcurrentExecutions告警发SNS　〔区分词：ConcurrentExecutions〕

- C：为网络应用的 Lambda 函数设置预配置并发。实施 Route 53 健康 检查和故障转移记录，以将流量路由到备用区域。配置 CloudWatch 警报 以使用 Lambda ConcurrentExecutions 指标并发送 SNS 通知。

**#640｜备用区DynamoDB和MySQL不能依赖主区** → DynamoDB全球表加RDS跨区只读副本，应用改连本区

- A：配置 DynamoDB 全球表。将所需的表复制到次要区域。在次要区域中创建 RDS 数据库实例 的只读副本。配置次要应用程序以使用次要区域中的 DynamoDB 表和只读副本。

**#673｜EKS读密集网站欧美中东都要低延迟** → 应用多区部署，DynamoDB全球表读本区，Route 53地理路由配健康检查

- D：将应用程序部署到多个 AWS 区域。将 DynamoDB 表转换为具有目标区域副本的全球表。更 新应用程序以访问最近的 DynamoDB 副本。为目标区域创建 Route 53 地理位置记录集。 配置 Route 53 健康检查并启用评估目标健康。

### 网络与连接

**#17｜全球API慢又用LINK和LOCK特殊方法** → Global Accelerator全球快线接ALB　〔区分词：Global Accelerator〕

- C：在 AWS Global Accelerator 中添加一个加速器。将 ALB 配置为源。

**#31｜海量设备用MQTT且每台独立X.509证书** → IoT Core接线，每个Thing配自己的证书

- C：设置 AWS IoT Core。为每个设备创建相应的 AWS IoT 事物并配置一个 证书。将每个设备连接到 AWS IoT Core。

**#34｜Windows安全RDP要集成本地AD** → Managed AD建信任，域内RD Gateway统一接远程桌面

- D：通过使用 AWS 目录服务为 Microsoft Active Directory 部署托管的 Active Directory。 与本地 Active Directory 建立信任。通过使用 AWS 快速启动在 AWS 上部署远程桌面网关。确 保远程桌面网关已加入域。使用远程桌面网关通过 RDP 访问目标实例。

**#44｜总部私网访问多区域且要高可用** → 双Direct Connect保冗余，DX Gateway连跨区域VPC

- D：从公司总部建立两个 AWS Direct Connect 连接到一个 AWS 区域使用公司 WAN 通过 DX 连 接发送流量，使用 Direct Connect 网关访问其他 AWS 区域的数据。

**#52｜SFTP上云但白名单IP绝不能变** → BYOIP带旧地址，EIP绑Transfer Family，文件落S3　〔区分词：Transfer〕

- A：在公司的 AWS 账户中注册客户拥有的 IP 地址块。从地址池中创建弹性 IP 地址，并将其分配 给 AWS Transfer for SFTP 端点。使用 AWS Transfer 将文件存储在 Amazon S3 中。

**#65｜单条DX要冗余且连跨区域VPC** → 第二条DX加两条私有VIF，同接DX Gateway　〔区分词：Co nnect〕

- A：配置一个 Direct Connect 网关。删除现有连接中的私有虚拟接口。创建第二个 Direct Co nnect 连接。在每个连接上创建一个新的私有虚拟接口，并将两个私有虚拟接口连接到 Direct Connect 网关。将 Direct Connect 网关连接到单个 VPC。

**#97｜居家员工要VPN访问多账户应用** → 集中Client VPN接入网络，再用Transit Gateway和路由通各账户

- C：在主要 AWS 账户中创建一个客户端 VPN 端点，提供一个连接到每个 AWS 账户的传输网关，配 置所需的路由以允许访问内部应用程序

**#99｜接口端点建好了域名仍解析公网IP** → 给接口端点启用Private DNS，并确认VPC DNS支持　〔区分词：VPC、DNS〕（待核验）

- B：在 VPC 属性中启用私有 DNS 选项。

**#105｜在家和多办公室开发者要访问VPC内OpenSearch** → Client VPN给个人电脑进私网的安全通道

- A：配置并设置 AWS 客户端 VPN 端点。将客户端 VPN 端点与 VPC 中的子网 关联。配置客户端 VPN 自助服务门户。指示开发人员使用 客户端连接到客户端 VPN。

**#109｜全球UDP游戏要一组固定IP** → 各区NLB接游戏服，Global Accelerator给全球固定入口　〔区分词：G lobal Accelerator、Global Accelerator〕

- C：在每个 AWS 区域配置游戏服务器。在游戏服务器前配置一个网络负载均衡器 (NLB)。在 AWS G lobal Accelerator 中创建一个加速器，并在每个区域配置端点组。将 NLB 与相应的区域端点 组关联。将游戏客户端的应用程序指向 Global Accelerator 端点。

**#111｜美东五个VPC只需访问欧洲指定VPC** → 跨区须定向Peering或两地TGW互联，原单TGW答案核验（待核验）

- A：在 eu-west-1 中创建一个传输网关。将 us-east-2 中的 VPC 和 eu-west-1 中的 VPC 附加到 传输网关。创建每个 VPC 中必要的路由条目，以便流量通过 传输网关路由。

**#134｜ALB坏一台就得人工补EC2** → 建ASG接原ALB，启动模板定新机，再把旧机纳入组

- B：创建一个配置为处理 web 应用程序流量的自动扩展组。将一个新的 启动模板附加到自动扩展组。将自动扩展组附加到现有的 ALB。将 现有的 EC2 实例附加到自动扩展组。

**#139｜私有EC2每天大量读S3导致NAT贵** → S3网关端点绕开NAT，端点策略只放目标桶

- C：在 VPC 中设置 S3 网关 VPC 端点。将端点策略附加到端点，以允许对 S3 存储桶执行所需操作 。

**#143｜Windows敏感文件要复制到另一灾备区域** → 灾备区建FSx，跨区VPC互通，DataSync经私网端点复制　〔区分词：PrivateLink〕

- C：在灾难恢复区域创建一个 FSx for Windows File Server 文件系统。通过使用 VPC 对等连接建 立主区域 VPC 和灾难恢复区域 VPC 之间的连接。配置 AWS DataSync 通过 AWS PrivateLink 的接口 VPC 端点进行通信。

**#155｜NAT日志见公网入站ACCEPT怀疑被主动连接** → 查反方向私网到公网流量，结合双网卡日志判断是否返回包

- D：打开 Amazon CloudWatch 控制台。选择包含 NAT 网关的弹性 网络接口和私有实例的弹性网 络接口的日志组。运行查询，过滤条件为目标地址设置为 " like 198.51.100.2 "，源地址设 置 为 " like 203.0 "。运行 stats 命令以过滤源地址和目标地址传输的字节总E.

**#162｜游戏REST模型不变但弹性和会话延迟差** → API Gateway保REST及API Key，Lambda跑逻辑，DynamoDB按需存会话　〔区分词：Gateway〕

- C：使用 Amazon API Gateway 实现 REST API。在 AWS Lambda 中运行业务逻辑。将玩家会话 数据存储在具有按需容量的 Amazon DynamoDB 中。

**#163｜VPC内EC2访问不了私有API** → 建execute-api接口端点、开私有DNS、端点与API资源策略双放行　〔区分词：execute-api:Invoke〕

- B：为 API Gateway 创建一个接口 VPC 端点。附加一个允许 execute-api:Invoke 操作的端点策略 。启用 VPC 端点的私有 DNS 命名。配置一个允许从 VPC 端点访问的 API 资源策略。使用 API 端点的 DNS 名称访问 API。 最受欢迎

**#176｜所有辐射VPC共用中央NAT出互联网** → RAM共享TGW，挂各VPC并把默认路由引到出口VPC

- B：创建一个传输网关，并与现有的 AWS 账户共享。将现有 VPC 附加到 传输网关，配置所需的路由以允许访问互联网。

**#185｜已有按路径ALB但防火墙只认固定IP** → NLB固定IP套在ALB前，保留七层路由又能加白名单

- B：创建一个网络负载均衡器（NLB）。将 NLB 与多个 可用区中的一个静态 IP 地址关联。为 NLB 创建一个 ALB 类型的目标组，并添加现有的 ALB。将 NLB 的 IP 地址添加到防火墙设备中。更新客户端以连接到 NLB。

**#193｜第三方只白名单原公网CIDR而应用要迁云** → BYOIP带原地址块，EIP绑NAT统一出站　〔区分词：NAT〕

- B：在 AWS 账户中注册一块客户拥有的公共 IP 地址块。从地址块创建弹性 IP 地址并将其 分配给 VPC 中的 NAT 网关。

**#197｜第三方Web应用靠Cookie保持会话** → ASG接ALB并启用应用Cookie粘性会话　〔区分词：ALB、cookies〕

- C：将 EC2 实例放置在自动扩展组中。配置一个公共应用负载均衡器 （ALB），并配置 ALB 将应用程序的流量引导到自动扩展组。为应用程序的 cookies 启用 粘性会话。通过 ALB 的 域名访问应用程序。

**#199｜隔离SageMaker仍要安装PyPI包** → CodeArtifact代理PyPI，再通过VPC端点私网取包　〔区分词：CodeArtifact、Python〕

- D：创建一个 AWS CodeArtifact 域和存储库。为 CodeArtifact 存储库添加一个公共:pypi 的外部 连接。配置 Python 客户端以使用 CodeArtifact 存储库。为 CodeArtifact 创建一个 VPC 端点 。

**#200｜万台MQTT传感器不能因Kafka单机崩溃丢数据** → IoT Core接传感器，Firehose缓冲，Lambda转换后存储　〔区分词：Kinesis Data Firehose、Lambda〕

- C：部署 AWS IoT Core，并将其连接到 Amazon Kinesis Data Firehose 交付流。使用 AWS Lambda 函数处理数据转换。将传感器路由以发送数据到 AWS IoT Core。

**#202｜全球三地区验证并核销票务条码** → 题库记DynamoDB全球表加Lambda@Edge，CloudFront用统一域名接入　〔区分词：Lambda@Edge〕（待核验）

- D：将数据库托管在 Amazon DynamoDB 全球表上。创建一个 Amazon CloudFront 分发。 将 CloudFront 分发与包含后端逻辑以 验证条形码的 Lambda@Edge 函数关联。创建一个将 api.example.com 映射到 CloudFront 分发的 Amazon Route 53 记录。

**#208｜新账户要直接使用中央VPC网络** → RAM共享中央VPC子网，无须另建整套网络

- D：使用 AWS 资源访问管理器将中央 VPC 中的子网共享给新的 AWS 账户。

**#215｜VPC Lambda调用第三方只接受固定公网IP** → 私有子网出NAT，NAT绑EIP给白名单　〔区分词：NAT〕

- A：部署一个 NAT 网关。将弹性 IP 地址与 NAT 网关关联。配置 VPC 以使用 NAT 网关。

**#226｜VPC Lambda接第三方只认批准的IPv4** → Lambda绑私有子网，报备所有出口NAT的EIP　〔区分词：NAT〕

- A：通过使用私有子网将 Lambda 函数附加到 VPC。提供 NAT 网关的弹性 IP 地址。

**#237｜无互联网EC2要修补且补丁源在另一账户** → SSM和S3走VPC端点，补丁源VPC用对等连接　〔区分词：VPC〕

- C：VPC 端点 + 与修补源的 VPC 对等

**#253｜PrivateLink服务在伦敦但美东客户需本地接入** → 美东建NLB用IP目标指向伦敦实例，经跨区网络转发　〔区分词：IP〕

- B：在 us-east-I 中创建一个 NLB。创建一个使用公司在 eu-west-2 中托管 SaaS 服务的实例的 IP 地址的 IP 目标组。配置一个使用位于 us-east-I 的 NLB 的 PrivateLink 端点服务。授予特定 AWS 账户访问权限，以连接到 SaaS 服务。

**#254｜VPC内应用要解析仅本地有的私有域** → Route 53 Resolver出站端点加条件转发规则到本地DNS

- B：为 VPC 启用 DNS 主机名。使用 Amazon Route 53 Resolver 配置一个新的出站端点。创 建一个 Resolver 规则，将对公司示例的请求转发到本地名称服务器。

**#255｜多AZ TCP服务要固定白名单IP加域名** → 每AZ给NLB配EIP，TCP目标接EC2，Route 53别名指NLB　〔区分词：DNS〕

- C：为服务创建 Amazon EC2 实例，为每个可用区创建一个弹性 IP 地址，创建一个网络负载均衡 器（NLB）并暴露分配的 TCP 端口，将弹性 IP 地址分配给每个可用区的 NLB，创建一 个目标组并将 EC2 实例注册到 NLB，创建一个名为 my service com 的新 A（别名）记录集 ，并将 NLB DNS 名称分配给该记录集。

**#265｜开发账户反复重建仍要自助接共享服务** → 共享TGW开自动接受，用RAM共享，开发者自建附件　〔区分词：RAM〕

- B：在共享服务账户中开启传输网关的自动接受功能。使用 AWS 资源访问管理器（AWS RAM）将 共享服务账户中的传输网关资源与开发账户共享。在开发账户中接受该资源。在开发账户中创 建一个传输网关附件。

**#275｜EC2旧微服务调用API必须全走私网** → API改Private，execute-api接口端点与资源策略限定入口　〔区分词：Ga teway〕

- B：为 API Gateway 创建一个接口 VPC 端点，并设置端点策略以仅允许访问特定 API。为 API Ga teway 添加资源策略，以仅允许从 VPC 端点访问。 将 API Gateway 端点类型更改为私有。

**#276｜百账户出站都要统一规则过滤** → TGW引到中央出口VPC，各AZ Network Firewall过滤后NAT出网

- B：为出站流量创建一个新的 VPC 以连接到互联网。将现有的传输网关连接到新的 VPC。配置一 个新的 NAT 网关。使用 AWS 网络防火墙进行基于规则的过滤。 在每个可用区创建网络防火墙端点。修改所有默认路由，使其指向网络防火墙端点。

**#283｜五台EC2靠DNS多值分流扛不住突发** → EC2移私网，ALB做统一入口，DNS改指ALB　〔区分词：ALB、VPC〕（待核验）

- D：在 API 前创建一个应用负载均衡器 (ALB)。将 EC2 实例移动到 VPC 的私有子网中。将 EC2 实例添加为 ALB 的目标。更新 Route 53 记录以指向 ALB。

**#288｜季度更新目的地内容时缓存和EC2被压垮** → DAX缓存DynamoDB，ALB加ASG，更新前计划扩容

- A：设置 DynamoDB 加速器 (DAX) 作为内存缓存。更新应用程序以使用 DAX。为 EC2 实例创建一 个自动扩展组。创建一个应用程序负载均衡器 (ALB)。将自动扩展组设置为 ALB 的目标。更新 Route 53 记录以使用简单路由策略，目标为 ALB 的 DNS 别名。在内容更新之前，为 EC2 实 例配置计划扩展。

**#296｜两AZ子网地址用满还想加第三AZ** → ASG先移走实例再逐个拆分重建子网，分阶段腾地址不加CIDR　〔区分词：AZI〕

- A：更新自动扩展组，仅使用 AZ2 子网。删除并重新创建 AZ1 子网，使用一半的原地址空间。调 整自动扩展组以同时使用新的 AZI 子网。当实例健康时，调整自动扩展组仅使用 AZ1 子网。移 除当前的 AZ2 子网。使用原 AZ1 子网的后半部分地址空间创建新的 AZ2 子网。使用原 AZ2 子 网地址空间的一半创建新的 AZ3 子网，然后更新自动扩展组以目标所有三个新子网。

**#306｜EC2安全代理转发流量却怎么都出不了网** → 关闭代理实例Source/Destination Check让它能当路由器

- A：禁用运行代理软件的 EC2 实例上的源/目标检查

**#312｜单机ASG单AZ出口和单RDS要多AZ容错** → 多AZ各配NAT，RDS开Multi-AZ，ASG跨AZ至少三台　〔区分词：RDS、MyS QL〕

- A：在其他可用区部署一个额外的 NAT 网关。使用适当的路由更新路由表。将 RDS for MyS QL 数据库实例修改为多可用区配置。配置自动扩展组以在可用区之间启动实例。将自动扩展 组的最小容量和最大容量设置为 3。

**#322｜本地与多VPC都要解析cloud私有域** → 私有区关联所有VPC，共享VPC Resolver入站，本地经DX条件转发　〔区分词：cloud.example.c om〕

- A：将私有托管区域关联到所有 VPC。在共享服务 VPC 中创建一个 Route 53 入站解析器。将 所有 VPC 附加到传输网关，并在本地 DNS 服务器中为指向入站解析器的 cloud.example.c om 创建转发规则。

**#330｜ALB不准被直接访问只许CloudFront来源** → ALB安全组只放CloudFront托管前缀列表（待核验）

- B：更新 ALB 安全组 ingress 以仅允许来自 CloudFront 管理的前缀列表的访问。

**#332｜天气API要跨区域故障转移** → 备区API Gateway加Lambda，DNS故障转移，DynamoDB全球表

- C：在另一个区域部署一个新的 API Gateway API 和 Lambda 函数。将 Route 53 DNS 记录更改 为故障转移记录。启用目标健康监控。将 DynamoDB 表转换为全球表。

**#341｜临时测试环境要自动创建删除并回报本地** → 共用一个已连TGW的测试VPC，CloudFormation只反复建测试资源　〔区分词：CloudF ormation〕

- B：为测试环境创建一个单一的 VPC。包括一个传输网关附加和相关路由配置。使用 AWS CloudF ormation 将所有测试环境部署到 VPC 中。

**#342｜一组API只许认证用户从VPC访问** → API改Private，加接口端点与资源策略，再保留原身份认证

- C：在 API Gateway 中将 API 端点从区域更新为私有。在 VPC 中创建一个接口 VPC 端点。创建 一个资源策略，并将其附加到 API。使用 VPC 端点从 VPC 调用 API。

**#346｜旧SFTP EIP不能变且想托管高可用** → 把原EIP迁Transfer Family VPC端点，沿用白名单，文件同步到S3　〔区分词：VPC〕

- B：将弹性 IP 地址与 EC2 实例解除关联 创建一个用于 SFTP 文件托管的 Amazon S3 存储桶 创建 一个 AWS Transfer Family 服务器 配置 Transfer Family 服务器以具有一个 VPC 托管的、面 向互联网的端点 将 SFTP 弹性 IP 地址与新端点关联 将带有客户 IP 地址的安全组附加到新 端点 将 Transfer Family 服务器指向 S3 存储桶。将所有文件从 SFTP 服务器同步到 S3 存储 桶。

**#353｜要关SSH入口并审计工程师命令** → SSM角色加Session Manager原生会话，关22端口并配置会话日志　〔区分词：AmazonSSMManagedInstanceCore、IAM、start-session〕（待核验）

- D：创建一个附加了 AmazonSSMManagedInstanceCore 管理策略的 IAM 角色。将 IAM 角色附 加到所有 EC2 实例。移除所有附加到 EC2 实例的安全组规则，这些规则允许在端口 22 上的 入站 TCP。让工程师为他们的设备安装 AWS 系统管理器会话管理器插件，并通过从系统管理 器的 start-session API 调用远程访问实例。

**#360｜要查NAT访问过哪些网站并拦指定站** → Logs Insights查流日志目标，Network Firewall做过滤

- A：使用 Amazon CloudWatch Logs Insights 查询日志，确定 EC2 实例通信的互联网目标。使 用 AWS Network Firewall 阻止这些网站。

**#361｜所有开发账户都要读共享Aurora实时数据** → 共享账户建TGW经RAM共享，开发账户接受后配路由

- B：在共享服务账户中创建一个传输网关。为传输网关创建一个 AWS 资源访问管理器（AWS RAM）资源共享。与所有开发账户共享传输网关。指示开发人员接受资源共享。配置网络。

**#364｜多VPC出网要集中检查并保证流量对称** → 检查VPC放GWLB和安全设备，TGW路由引流并启Appliance Mode

- D：创建一个包含网关负载均衡器（GWLB）、GWLB 端点和一个 网络虚拟设备的检查 VPC。更新所有工作负载 VPC 中的路由表，以将流量发送到传输 网关。配置传输网关路由表以将流量转发到 GWLB 端点。启用 设备模式在传输网关上。

**#372｜ALB网站启WAF但客户要固定入口IP** → Global Accelerator给静态IP，后端仍用原ALB　〔区分词：Global Accelerator〕

- C：创建一个 AWS Global Accelerator 标准加速器。指定 ALB 作为加速器的 端点。将加速器 的 IP 地址提供给客户。

**#380｜迁云后EC2时钟仍必须跟本地原子钟** → DHCP Options指定本地NTP，DX及网络放行NTP　〔区分词：DHCP〕

- A：配置一个 DHCP 选项集，包含本地 NTP 服务器地址。将选项集分配给 VPC。确保 AWS 和本 地网络之间允许 NTP 流量。

**#383｜跨账户内部API不能再经公网ALB** → PrivateLink需NLB端点服务，可NLB前置再接内部ALB（待核验）

- D：创建一个内部 ALB。将元数据 API 的 EC2 实例注册到内部 ALB。为内部 ALB 配置 一个 AWS PrivateLink 端点服务。通过 PrivateLink 端点授予内部应用程序访问 元数据 API 的权限。

**#384｜三百账户按OU内部互通但OU之间不通** → 每OU独立TGW和附件路由，RAM授权范围限定相应OU

- C：在每个 OU 中的一个账户中配置一个传输网关。通过使用 AWS 资源访问管理器（AWS RAM） 在整个组织中共享传输网关。为每个 VPC 创建传输网关 VPC 附加。

**#385｜三AZ应用对外只能用一个既定EIP** → NAT绑固定EIP，故障自动重建并迁移EIP和更新路由　〔区分词：CloudWatch、AW S Lambda〕（待核验）

- C：在公共子网中部署一个 NAT 网关。将弹性 IP 地址分配给 NAT 网关。 使用 Amazon CloudWatch 和自定义指标监控 NAT 网关。如果 NAT 网关不健康，调用 AW S Lambda 函数在不同的子网中创建一个新的 NAT 网关。将弹性 IP 地址分配给新的 NAT 网关 。

**#393｜启动时从S3拉大量内容被健康检查提前杀掉** → 延长ASG Health Check Grace Period等初始化完成

- D：增加自动扩展组的健康检查宽限期。

**#408｜远程员工不能直接公网访问私有应用** → Client VPN证书认证，关联子网并授权VPC访问　〔区分词：Clie nt〕

- B：生成服务器和客户端证书及密钥。创建一个 AWS Client VPN 终端节点。将私有子网与 Clie nt VPN 终端节点关联。授权远程员工访问 VPC。 下载 Client VPN 终端节点配置文件，以便在远程员工的 VPN 客户端应用程序中使用。

**#416｜Kinesis私网应用经NAT读流导致Bytes费高** → 建Kinesis接口端点，让流量直接进服务

- D：为 Kinesis 数据流添加一个接口 VPC 端点到 VPC。确保 VPC 端点 策略允许来自应用程序的流量。

**#418｜全球用户调用日本区域API慢** → API Gateway设为CloudFront额外源，前端同域访问后端　〔区分词：DNS〕

- C：将区域 API 端点设置为 CloudFront 分发的源。通过 使用应用程序的 DNS 名称访问后端 API。

**#424｜ALB偶发503要立即显示自定义错误页** → 应联想CloudFront自定义错误响应指S3页面，原DNS方案核验（待核验）

- B：创建第二个 CloudFront 分发和一个 S3 静态网站来托管自定义错误页面。设置 Route 53 故障转移路由策略。在两个分发之间使用主动-被动配置。

**#429｜三个AZ只有一个NAT易跨区且单点** → 补到每AZ一个NAT，各私有子网走本AZ出口

- A：添加两个 NAT 网关（每个可用区一个）。配置每个私有子网使用其可用区的 NAT 网关 。

**#434｜双DX位置接两区域TGW还要跨区域互通** → 两条Transit VIF接同DX Gateway并关联各TGW，TGW彼此跨区对等

- D：从 DX-A 连接创建一个传输 VIF 到 Direct Connect 网关。 从 DX-B 连接创建一个传输 VIF 到 同一个 Direct Connect 网关以实现高可用性。 将 eu-west-1 和 us-east-1 传输网关与此 Dire ct Connect 网关关联。 将传输网关彼此对等，以支持跨区域路由。

**#442｜跨账户私网访问RDS且连接数要受控** → 数据库账户放RDS Proxy，私网端点或NLB加PrivateLink提供访问　〔区分词：RDS、PrivateLink〕（待核验）

- B：在 AWS 数据库账户中创建 RDS 代理。在私有子网中创建代理端点。 配置 AWS PrivateLink 和网络负载均衡器，以提供对数据库实例的访问。

**#452｜VPC应用需解析本地AD域** → Resolver出站端点加条件规则，经DX转本地DNS　〔区分词：Resolver〕

- C：通过使用 Amazon Route 53 Resolver 创建 DNS 端点，添加条件转发规则以 解析本地数据中心与 VPC 之间的 DNS 命名空间。

**#461｜IPv6私有实例只能出站不能被公网主动连接** → VPC子网加IPv6，私有路由::/0指Egress-only Internet Gateway

- C：更新现有 VPC，并将 Amazon 提供的 IPv6 CIDR 块与 VPC 和所有 子网关联。创建一个仅出站互联网网关。更新所有私有子网的 VPC 路由表， 并为仅出站互联网网关添加 ::/0 路由。

**#467｜新版先给10%客户且测试期不能换版本** → ALB双目标组九一加权，目标组粘性锁用户版本

- B：创建一个由 ALB 引用的第二个目标组。将新逻辑部署到这个新目标组中的 EC2 实例上。更新 ALB 监听器规则以使用加权目标组。配置 ALB 目标组的粘性。

**#473｜TGW相连VPC只能访问少数授权VPC** → 每个附件独立TGW路由表，只列允许目标

- C：为每个 VPC 附加创建一个专用的传输网关路由表。仅将流量路由到授权的 VPC。

**#479｜多区域支付私网调用本地HSM需集中管理** → Cloud WAN汇全局网络，Direct Connect连本地HSM　〔区分词：Cloud WAN、Direct Connect〕

- D：设置 AWS Cloud WAN，并在本地数据中心与 AWS 之间使用 AWS Direct Connect 附加连接。

**#480｜产品团队自建S3访问点不得暴露互联网** → 根SCP强制访问点NetworkOrigin为VPC　〔区分词：SCP、AccessPomtNetworkOngin〕

- B：在组织的根级别创建一个 SCP，以拒绝 s3 CreateAccessPoint 操作，除非 s3 AccessPomtNetworkOngin 条件键评估为 VPC。

**#483｜多区域支付API要更快处理区域故障** → Global Accelerator前置各区域ALB，DNS别名指加速器　〔区分词：Global Accelerator〕

- B：在 AWS Global Accelerator 中创建一个加速器。创建一个端点组，并将每个 ALB 添加为组中的 端点。更新 Route 53 别名记录以指向加速器。

**#493｜本地两个静态客户网关要VPN冗余进VPC** → 一个VGW接VPC，两条VPN各双隧道并配路由

- A：创建一个虚拟私有网关。将虚拟私有网关与 VPC 关联。在所有 VPC 路由表中为虚拟私有网 关启用路由传播。创建两个站点到站点的 VPN 连接，每个连接有两个隧道。配置站点到 站点的 VPN 连接以使用虚拟私有网关并使用独立的客户网关。

**#508｜VPC既要私有域解析又要公共实例主机名** → 私有区关联VPC，开DnsSupport和DnsHostnames，DHCP用AmazonProvidedDNS

- B：创建一个私有托管区域。将私有托管区域与 VPC 关联。为 VPC 激活 enableDnsSupport 属性和 enableDnsHostnames 属性。创建一个新的 VPC DHCP 选项集，并配置 domain-name-servers=AmazonProvidedDNS。将新的 DHCP 选项集与 VPC 关联。

**#512｜Java复杂依赖要少管服务器迁云** → App2Container打包进ECR，ECS Fargate接ALB，任务执行角色获拉镜像权　〔区分词：Fargate、Serv ice、ECS〕

- A：通过使用 AWS App2Container 将应用程序迁移到 AWS Fargate 上的 Amazon Elastic Container Serv ice (Amazon ECS)。将容器镜像存储在 Amazon Elastic Container Registry (Amazon ECR) 中。 授予 ECS 任务执行角色访问 ECR 镜像库的权限。配置 Amazon ECS 使用应用程序负载均衡器 (ALB)。使用 ALB 与应用程序进行交互。

**#516｜多区域VPC和本地要专线及传递互通** → DX Transit VIF接DX Gateway，各区域TGW接VPC并按需互联　〔区分词：VIF〕

- B：在本地数据中心和 AWS 之间创建一个 AWS Direct Connect 连接。配置一个 传输 VIF，并将其连接到 Direct Connect 网关。通过在每个区域使用传输网关，将 Direct Connect 网关连接到所有其他 VPC。

**#520｜云上EC2要跟本地原子钟同步** → DHCP Options指定本地NTP地址并保证网络可达　〔区分词：DHCP〕

- A：配置一个带有本地 NTP 服务器的 DHCP 选项集。

**#521｜调用第三方SaaS不能公网也不能开放本VPC** → PrivateLink接口端点接供应商服务，端点安全组最小放行

- A：创建一个 AWS PrivateLink 接口 VPC 端点。将此端点连接到第三方 SaaS 应用程序提供的端点 服务。创建一个安全组以限制对端点的访问。 将安全组与端点关联。

**#540｜静态S3资产要跨区域容灾** → S3复制第二桶，CloudFront源组主备切换

- C：在 us-east-1 的 S3 存储桶上配置复制，以将对象复制到第二个区域的 S3 存储桶。设置一个 Amazon CloudFront 分发，创建一个包含两个 S3 存储桶作为源的源组。

**#559｜公司自管顶级域DNS但全球应用要统一入口** → Global Accelerator静态IP作DNS A记录，后接各区ALB　〔区分词：Global Accelerator〕

- C：创建一个 AWS Global Accelerator 加速器，具有多个目标在 适当 AWS 区域的端点组。使用加速器的静态 IP 地址在公共 DNS 中为 顶级域创建一个记录。

**#565｜跨区SaaS要全球固定IP并就近入口** → Global Accelerator接各区NLB，客户只白名单加速器IP

- B：创建一个 AWS Global Accelerator 标准加速器。为每个附加区域的 NLB 创建一个标准加速器 端点。向客户提供 Global Accelerator 的 IP 地址。

**#568｜共享NLB应用只许批准的业务VPC私接** → PrivateLink端点服务开启人工接受，仅批准授权端点请求　〔区分词：NLB〕

- B：使用集中式应用程序 NLB 创建 VPC 端点服务，并启用要求 端点接受的选项 在每个业务单元 VPC 中使用端点服务的服务名称创建 VPC 端点。 接受来自端点服务控制台的授权端点请求。

**#572｜EC2和本地都要私网读S3并移除NAT** → VPC用S3网关端点、本地经接口端点与Resolver私网解析

- B：在 VPC 内创建一个带有私有 DNS 的 S3 网关端点和一个 S3 接口端点。 更新 VPC 的每个子网和本地环境的路由。更新本地 DNS，以使用 S3 存储桶的私有 DNS 名 称。

**#574｜三地区游戏状态共享且用户进最低延迟区域** → 各区NLB加ASG，Route 53延迟路由，DynamoDB全球表　〔区分词：DynamoDB〕

- C：为 EC2 实例创建一个自动扩展组。将自动扩展组附加到每个区域的网络负载均衡器 (NLB)。为 每个区域创建一个使用基于延迟路由的 Amazon Route 53 条目，并指向该区域的 NLB。将游 戏元数据保存到 Amazon DynamoDB 全球表中。

**#580｜本地服务经DX私网提供给其他AWS客户** → PrivateLink需NLB提供端点服务，可IP目标经DX接本地　〔区分词：HTTP、HTTPS〕（待核验）

- B：创建一个接受 HTTP 或 HTTPS 流量的 VPC 端点服务，将其托管在应用负载均衡器后面， 并通过 DX 提供该服务。

**#582｜单区异步HTTP Lambda要跨区域故障转移** → SQS先解耦可保任务，但还得备用区入口和消费者　〔区分词：Simple Queue Service、SQS〕（待核验）

- B：创建一个 Amazon Simple Queue Service (Amazon SQS) 队列。配置 API Gateway 将流 量引导到 SQS 队列，而不是 Lambda 函数。配置 Lambda 函数从队列中提取消息进行处 理。

**#587｜合作伙伴代理只准访问公司域** → Resolver DNS Firewall先允许域白名单，低优先级兜底阻断其他域

- A：创建一个包含允许域的 Amazon Route 53 Resolver DNS 防火墙域列表。 配置一个 DNS 防火墙规则组，其中包含一个具有高数值的规则，阻止所有请求。 配置一个具有低数值的规则，允许对允许列表中的域的请求。 将规则组与 VPC 关联。

**#595｜私网EC2修补要用另一账户补丁仓库** → SSM和S3走端点，跨账户VPC Peering连补丁源　〔区分词：ACL、80〕（待核验）

- C：建一个 VPC 对等连接以访问核心账户中的补丁源代码库 EC2 实例。更新两个账户中的路由表 。 创建一个网络 ACL，阻止端口 80 的入站流量。将网络 ACL 与应用账户中的所有 子网关联。创

**#604｜EC2自管SFTP不可靠要扩展** → Transfer Family托管SFTP收S3，DNS改服务端点　〔区分词：Transfer、sftp.exa mple.com〕

- B：将 SFTP 服务器迁移到 AWS Transfer for SFTP。更新 Route 53 中的 DNS 记录 sftp.exa mple.com 指向服务器端点主机名。

**#626｜美东动态伸缩还要美西主备灾备** → 两区ALB加多AZ ASG，Route 53健康检查故障转移

- B：在 us-east-1 区域的 VPC 中部署一个跨多个可用区 (AZ) 的应用程序负载均衡器 (ALB)。在多个 AZ 中部署 EC2 实例，作为由 ALB 提供服务的自动扩展组的一部分。将相同的解决方案部 署到 us-west-1 区域。创建一个 Amazon Route 53 记录集，启用故障转移路由策略和健康 检查，以在两个区域之间提供高可用性。

**#633｜三AZ私有实例都要弹性出网** → 每AZ一台NAT，私有子网默认路由走本AZ

- A：添加两个 NAT 网关，以便每个可用区都有一个 NAT 网关。为每个私有子网配置一个路由表， 将流量发送到子网所在可用区的 NAT 网关。

**#652｜多个账户私网访问RDS又要管连接数** → RDS Proxy管连接池，NLB加PrivateLink提供跨账户私网入口　〔区分词：RDS、NLB、PrivateLink〕

- B：RDS 代理 + 通过 NLB 的 PrivateLink

**#655｜开发者在家和多办公室要读私有OpenSearch** → Client VPN让每台电脑安全进入VPC　〔区分词：Client、Client VP N〕

- A：配置并设置 AWS Client VPN 端点。将 Client VPN 端点与 VPC 中的子网关联。配置 Client VP N 自助服务门户。指示开发人员使用 Client VPN 客户端进行连接。

**#661｜不同账户VPC CIDR重叠却要私网调用共享应用** → PrivateLink端点服务不要求全网段互通，接口端点接服务　〔区分词：PrivateLink、IP〕

- C：创建一个 AWS PrivateLink 端点服务以共享营销应用程序。授予特定 AWS 账户连接到该服 务的权限。在其他账户中创建接口 VPC 端点，以使用私有 IP 地址访问该应用程序。

**#668｜百万MQTT传感器单代理过载丢数据** → 应联想IoT Core托管MQTT或NLB扩代理，原ALB接原生MQTT须核验　〔区分词：MOTT、ALB〕（待核验）

- A：为 MOTT 代理创建一个应用负载均衡器 (ALB) 和一个自动扩展组。将自动扩展组用作 ALB 的 目标。将 Route 53 中的 DNS 记录更新为别名记录。 将别名记录指向 ALB。使用 MQTT 代理存储数据。

**#683｜全球办公室CIDR要统一给所有安全组引用** → 中转账户建托管前缀列表，RAM共享，各账户安全组引用列表ID　〔区分词：VPC〕

- C：在中转账户中，创建一个包含所有内部 IP 地址范围的 VPC 前缀列表。使用 AWS 资源访问管理器将前缀列表与所有其他账户共享。使用共享的前缀 列表来配置其他账户的安全组规则。

### 迁移与混合架构

**#33｜工厂断网仍要模型即时检缺陷** → Greengrass把模型放本地推理，发现缺陷调用本地API　〔区分词：IoT Greengrass、Greengrass〕

- B：在本地服务器上部署 AWS IoT Greengrass。将 ML 模型部署到 Greengrass 服务器上。 创建一个 Greengrass 组件，从摄像头拍摄静态图像并进行推理。当检测到缺陷时，配置组件 调用本地 API。

**#64｜60TB MySQL网传要一月需加速迁移** → Snowball搬全量进S3，再用DMS导入Aurora　〔区分词：Edge〕

- C：订购一个 AWS Snowball Edge 设备。通过 S3 接口将数据加载到 Amazon S3 存储桶中。使用 AWS 数据库迁移服务（AWS DMS）将数据从 Amazon S3 迁移到 Aurora MySQL。

**#71｜Linux员工要用Windows桌面应用** → AppStream 2.0按需舰队流式送应用，用户池认证后浏览器使用　〔区分词：AppStream 2.0、App Stream 2.0、starling browse〕

- C：使用 Amazon AppStream 2.0 镜像构建器创建一个包含应用程序和 所需配置的镜像。配置一 个具有动态舰队自动扩展过程的 AppStream 2.0 按需舰队以运行该镜像。通过使用 App Stream 2.0 用户池实现身份验证。 指示员工通过基于 'starling browse' 的 AppStream 2.0 流媒体会话访问应用程序。

**#75｜一千台VMware要收CPU内存和进程再查询** → 装Application Discovery Agent，Migration Hub开探索，Athena查S3　〔区分词：Athena〕

- D：将 AWS 应用发现代理部署到每个本地服务器。在 AWS 迁移中心配置数据探索。使用 Amazon Athena 对 Amazon S3 中的数据运行预定义查询。

**#81｜迁移前盘点服务器和应用数据库关系** → Migration Hub汇总发现代理数据及策略建议

- B：使用带有发现代理和策略建议的迁移中心。

**#91｜600TB一次迁移只给三周且网速100Mbps** → 多台Snowball Edge加密装箱邮寄到S3　〔区分词：Snowball Edge〕

- A：通过 AWS 管理控制台订购几个 AWS Snowball Edge 存储优化设备。将设 备配置为目标 S3 存储桶。将数据复制到设备上。 将设备寄回 AWS。

**#103｜迁移商业案例只有CMDB导出文件** → Migration Evaluator用数据导入模板吃进CMDB

- B：使用迁移评估工具进行分析。使用数据导入模板上传来自 CMDB 导出的数据。

**#191｜旧设备看到某些响应头就出错** → CloudFront加Lambda@Edge按User-Agent删除问题响应头　〔区分词：Edge〕（待核验）

- D：为元数据服务创建一个 Amazon CloudFront 分发。创建一个应用负载均衡器（ALB） 。配置 CloudFront 分发以将请求转发到 ALB。配置ALB 以调用每种请求类型的正确 Lambda 函数。创建一个 Lambda@Edge 函数，响应查看者请求时根据 User-Agent 头部的值移除有 问题的头部。

**#216｜旧应用只会SMB但底层数据要先上S3** → File Gateway把SMB翻译成S3，先搬数据后改代码　〔区分词：Storage Gateway〕

- D：为应用程序创建一个 S3 存储桶 在非本地虚拟机上部署一个新的 AWS Storage Gateway 文 件网关 创建一个新的文件共享，将数据存储在 S3 存储桶中，并与文件网关关联 将数据从 本地存储复制到新的文件网关端点

**#298｜SFTP要固定公网IP且下游仍NFS** → Transfer Family各子网绑EIP，文件落多AZ EFS，下游改挂EFS　〔区分词：VPC、Files〕

- A：创建一个 AWS Transfer Family 服务器，为 Transfer Family 服务器配置一个面向互联网的 VPC 端点，为每个子网指定一个弹性 IP 地址，配置 Transfer Family 服务器将文件放入一 个跨多个可用区部署的 Amazon Elastic Files System（Amazon EFS）文件系统。修改 访问现有 NFS 共享的下游应用程序的配置，以挂载 EFS 端点。

**#302｜迁移前不知道服务器清单和应用依赖** → Migration Hub收发现代理数据，再用Strategy Recommendations生成建议

- B：使用 AWS 迁移中心并在服务器上安装 AWS 应用程序发现代理。部署 迁移中心策略推荐应用数据收集器。通过使用 迁移中心策略推荐生成报告。

**#310｜DocumentDB升级要先验证还不能丢数据** → 新版本新集群迁索引，DMS全量加CDC追平，验证后切DNS　〔区分词：DMS〕

- A：创建一个运行最新版本的新 Amazon DocumentDB 集群。使用 Amazon DocumentDB 索引 工具导出现有索引并将其导入到新集群中。创建一个新的 AWS DMS 实例和源端点及目标 端点。创建一个 DMS 任务，通过使用迁移和复制迁移类型来迁移数据。测试和验证新集群。 更新 Route 53 记录以指向新集群。

**#314｜物理服务器业务灾时需在云上继续运行** → 全源服务器装复制代理，DRS定义启动配置并常演练回切

- B：在源服务器上安装 AWS 复制代理，包括 MySQL 服务器。在目标 AWS 区域初始化 AWS 弹性灾 难恢复。定义启动设置。频繁地从最近的时间点执行故障转移和回退。

**#325｜2TB MySQL私网迁Aurora持续更新不能丢** → VPN先连通，DMS全量加CDC追平再切换

- B：在本地数据中心和托管 Aurora 集群的 VPC 之间创建 AWS 站点到站点 VPN 连接。在 AWS DMS 中将本地数据库指定为源端点。 将 Aurora 集群指定为目标端点。配置一个具有持续复制的 DMS 任务。

**#331｜基因组每份200GB处理数小时且用Docker** → DataSync进S3，事件触发Step Functions，ECR镜像交Batch跑长活　〔区分词：DataSync、Step Functions、ECR〕

- C：使用 AWS DataSync 将测序数据传输到 Amazon S3 使用 S3 事件触发一个 AWS Lambda 函数，该函数启动一个 AWS Step Functions 工作流 将 Docker 镜像存储在 Amazon 弹性容器注册表（Amazon ECR）中，并触发 AWS Batch 运行容器并处理 测序数据

**#340｜60TB镜像加每日新增要自动加密迁S3** → DataSync代理配同步任务，现有和增量一起搬　〔区分词：DataSync〕

- A：部署 AWS DataSync 代理并配置任务，将图像传输到 S3 存储桶

**#348｜汇总报表拖累MySQL加载且迁云不能扰客户** → DMS追平Aurora，报表走副本，ALB加Lambda和Proxy写主库，最后切DNS　〔区分词：AW S〕

- C：设置一个 Amazon Aurora MySQL 数据库 使用 AWS 数据库迁移服务（AWS DMS）来 执行 从本地数据库到 Aurora 的持续数据复制 为 Aurora MySQL 数据库创建一个 Aurora 副本 并将 聚合作业移至针对 Aurora 副本运行 设置收集端点作为在应用负载均衡器（ALB）后面的 AW S Lambda 函数，并 使用 Amazon RDS Proxy 向 Aurora MySQL 数据库写入 当数据库同步 后，将 收集器的 DNS 记录指向 ALB 在从本地切换到 AWS 后禁用 AWS DMS 同步任务

**#354｜本地MongoDB要低停机迁DocumentDB** → DMS建MongoDB CDC源端点和DocumentDB目标，持续同步后切换　〔区分词：DMS、CDC、Mongo DB〕

- B：创建一个 AWS 数据库迁移服务 (AWS DMS) 复制实例。使用变更数据捕获 (CDC) 为本地 Mongo DB 数据库创建源端点。为 Amazon DocumentDB 数据库创建目标端点。创建并运行 DMS 迁 移任务。

**#401｜第一批迁移要练技能低风险且半年内完成** → 先挑内部营销门户，用MGN重新托管，再SSM管补丁

- B：选择一个内部营销门户工作负载。使用 AWS 应用迁移服务进行重新托管。 通过使用 AWS 系统管理器补丁管理器建立持续的补丁管理。

**#407｜5TB敏感MySQL迁移不能走互联网且少停机** → DMS私网经DX全量加CDC，TLS传输，KMS静态加密　〔区分词：DMS、VPC、CDC、KMS〕

- B：使用 AWS 数据库迁移服务（AWS DMS）将数据迁移到 AWS。在私有子网中创建 DMS 复制实例。为 AWS DMS 创建 VPC 端点。配置 DMS 任务，以 使用全量加载加上变更数据捕获将数据从本地数据库复制到数据库实例。 (CDC)。使用 AWS 密钥管理服务 (AWS KMS) 默认密钥进行静态加密。使用 TLS 进行传输加密。

**#427｜收购公司无文档且月末批处理需迁移商业案例** → Migration Evaluator采盘点成本，Migration Hub看组合，Discovery查依赖

- C：使用迁移评估器生成服务器列表。为商业案例构建报告。使用 AWS 迁移中心查看投资组合。使用 AWS 应用程序发现服务了解 应用程序依赖关系。

**#436｜SQL Server迁异构托管数据库** → SCT先转模式到RDS MySQL，DMS再搬数据　〔区分词：DMS〕

- C：使用 AWS 架构转换工具将数据库架构转换为 Amazon RDS for MySQL。 然后使用 AWS 数据库迁移服务 (AWS DMS) 将数据从本地 数据库迁移到 Amazon RDS。

**#470｜几千VMware无清单要准确迁移估算** → Migration Evaluator无代理采集，剔除闲置，再汇入Migration Hub　〔区分词：ESXi〕

- C：将迁移评估器无代理收集器部署到 ESXi 虚拟机监控器。查看在迁移评估器中收集的数据。识 别不活跃的服务器。将不活跃的服务器从迁移列表中移除。 将数据导入 AWS Migration Hub。

**#558｜VMware迁移前要依赖网络关系图** → Discovery Agent采连接，Migration Hub Network Diagram看主机依赖　〔区分词：AW S〕

- A：使用 AWS 应用发现服务。选择一个 AWS 迁移中心的主 AWS 区域。在本地服务器上安装 AW S 应用发现代理以进行数据收集。授予应用发现服务使用迁移中心网络图的权限。

**#586｜VMware不能装Agent加VM却要TCO依赖评估** → 联想无代理采集和Migration Evaluator，原MGN评估功能须核验（待核验）

- A：使用 AWS 应用迁移服务无代理服务和 AWS 迁移中心策略 建议生成 TCO 报告

**#606｜VMware迁EC2要保留软件和配置** → 应联想MGN持续复制重新托管，原SSM加Backup转AMI须核验　〔区分词：Systems Manager、Systems Manager Agent、Backup〕（待核验）

- D：在 AWS Systems Manager 中为混合环境创建一个托管实例激活。下载 并安装 Systems Manager Agent 在本地虚拟机上，将虚拟机注册到 Systems Manager 以 成为托管实例。使用 AWS Backup 创建虚拟机的快照并创建 AMI。启动一个 基于 AMI 的 EC2 实例

**#608｜SQL Server和Oracle含自定义过程迁RDS要选两项** → 目前只给SCT分析这一项，缺失的第二项不能硬编　〔区分词：SCT〕（待核验）

- C：使用 AWS SCT 分析源数据库所需的更改。

**#609｜迁移要CPU内存进程与服务器通信图** → 每台虚机装Application Discovery Agent采详细依赖

- A：使用 AWS 应用发现服务，并将数据收集代理部署到数据中心的每台虚拟机上。

**#617｜不同配送区容器任务要按用量分成本** → Fargate run-task开启ECSManagedTags并加区域业务标签　〔区分词：run-task、enableECSManagedTags〕

- D：在 AWS Fargate 上创建一个 Amazon 弹性容器服务 (Amazon ECS) 集群。使用 AWS CLI run-task 命令，并将 enableECSManagedTags 设置为 true 启动规划应用程序。使用 --tags 选项为任务分配自定义标签。

**#628｜物理虚机要盘点配置进程依赖及实例建议** → Discovery Agent采指标和连接，Migration Hub分应用并推荐规格

- C：在物理机器和虚拟机上安装 AWS 应用发现代理，以收集来自服务器的性能和使用 信息。在迁移之前，使用 AWS 迁移中心发现现有服务器并将服务器分组到应用程序中。通过 使用迁移中心生成 EC2 实例推荐。

**#632｜本地和云上补丁工具杂乱要一张合规报告** → 统一SSM Patch Manager，汇总Patch Compliance

- A：使用 AWS Systems Manager 管理内部服务器和 EC2 实例上的补丁。使用 Systems Manager 生成补丁合规性报告。

**#647｜部分国家驻留低延迟且偏远工厂网络差** → Outposts把AWS放本地，断续联网工厂用Snowball Edge计算　〔区分词：Outposts、Snow ball〕

- C：为有数据合规要求或单数字毫秒延迟要求的应用程序安装 AWS Outposts。使用 AWS Snow ball Edge 计算优化设备在工厂现场托管工作负载。

**#650｜Windows本地每天新增5GB已连专线** → DataSync每日增量同步到FSx Windows　〔区分词：FSx〕

- B：使用 AWS DataSync 安排每日任务，以在本地 Windows 文件 服务器和 Amazon FSx 之间复制数据。

**#671｜已有本地规格利用率CSV要推荐实例和费用CSV** → Migration Evaluator导入清单生成Quick Insights，再导出建议

- D：将 onprem.csv 文件上传到 Amazon S3 存储桶。配置迁移评估器以从 S3 存储桶导入数据 。 通过使用迁移评估器快速洞察生成并确认建议。将最终建议导出到 S3 存储桶中的新 .csv 文件。

## 多选（135 题）

### 安全与权限

**#1｜数百账户统一给CloudFront装WAF** → 记“全功能、Config打底、Firewall Manager统管”，原答案含Shield须核验　〔区分词：Firewall Manager、Shield Advanced〕（待核验）

- C：为组织启用所有功能。
- D：使用 AWS Firewall Manager 在所有账户中为所有 CloudFront 分发部署 AWS WAF 规则。
- E：使用 AWS Shield Advanced 在所有账户中为所有 CloudFront 分发部署 AWS WAF 规则。

**#113｜开发CloudFormation堆栈删不掉且要同名重建** → 两步记自定义Lambda先清S3对象、执行角色授DeleteObject　〔区分词：Lambda〕

- A：将 AWS Lambda 函数与 CloudFormation 自定义资源关联，以删除给定 S3 存储桶中存在的 所有键。将此自定义资源作为应用程序的 CloudFormation 模板的一部分实现。
- D：确保 CloudFormation 操作由具有 s3:DeleteObject 权限的角色调用，该角色对存储桶中的所有对象具有权限。

**#114｜API多区域双活还要用同样加密秘密** → 三件套记多区API加Route 53、多区域KMS主副钥、Secrets Manager跨区复制　〔区分词：Route 53〕

- A：将 API 部署到多个区域。使用自定义域名配置 Amazon Route 53，将流量路由到每个区域 的 API 端点。实施 Route 53 多值答案路由策略。
- B：创建一个新的 KMS 多区域客户管理密钥。在每个相关区域创建一个新的 KMS 客户管理副本密 钥。
- C：将现有的 Secrets Manager 密钥复制到其他区域。对于每个相关区域的复制密钥，选择适当 的 KMS 密钥。

**#149｜多账户要统一身份MFA且网络分组互通** → 三件套记Control Tower建账户、TGW路由隔离、Identity Center权限集加MFA　〔区分词：Organizations、VPC〕

- A：Tower 部署一个着陆区环境。注册账户并邀请现有账户加入 AWS Organizations 中的组织。
- C：在每个账户中创建传输网关和传输网关 VPC 附加。配置适当的路由表。
- D：设置并启用 AWS IAM 身份中心（AWS 单点登录）。为现有账户创建适当的权限集，并要求 MFA。

**#152｜别账户团队要最小权限读KMS加密S3** → 三道门记桶策略放行、KMS钥策略允许解密、调用角色同时获读桶和解密权限

- A：权限的存储桶策略。将存储桶策略的主体设置为策略账户的账户 ID。
- C：更新 Creative 账户中的自定义 KMS 密钥策略，以授予 strategy_reviewer IAM 角色解 密权限。
- F：更新 strategy_reviewer IAM 角色，以授予 S3 存储桶的读取权限，并授予自定义 KMS 密钥的 解密权限。

**#159｜公网订单应用防攻击且别让人绕过CloudFront** → 两层记随机源站头锁ALB、CloudFront关联WAF托管规则　〔区分词：ALB、WAF、ACL〕

- A：为源的 Amazon CloudFront 分发。在 CloudFront 域上添加自定义头和随机值。如果头 和值匹配，则配置 ALB 有条件地转发流量。
- E：部署一个包含适当规则组的 AWS WAF 网络访问控制列表（ACL）。将网络 ACL 与 Amazon CloudFront 分发关联。

**#160｜中央Lambda要最小权限修复所有账户** → 两步记中央执行角色获AssumeRole、成员修复角色信任中央并仅授必要权限

- A：在集中账户中，创建一个将 Lambda 服务作为受信实体的 IAM 角色。添加一个 内联策略以假设其他 AWS 账户的角色。
- B：在其他 AWS 账户中，创建一个具有最小权限的 IAM 角色。将集中账户的 Lambda IAM 角色添加为受信实体。

**#252｜VM导入EC2未显示在SSM受管列表** → 两步检查SSM Agent安装运行、实例角色具备SSM权限　〔区分词：IAM〕

- A：验证系统管理器代理是否已安装在实例上并正在运行。
- B：验证实例是否分配了适当的 IAM 角色以供系统管理器使用。

**#272｜患者数据库审计十年不可篡改** → 两件套记Aurora加密强制TLS、Database Activity Streams经Firehose入S3合规锁十年　〔区分词：mazon Aurora、Data〕

- A：mazon Aurora PostgreSQL 加密数据库中。强制所有连接使用 TLS。
- C：在数据库集群中创建数据库活动流。使用 Amazon Data Firehose 将数据发送到 Amazon S3 存储桶。以合规模式启用 S3 对象锁定，保留期为 10 年。

**#316｜SaaS和EKS安全日志要合并看用户行为** → 三步记AppFabric转OCSF、Security Lake汇原生日志加自定义源、OpenSearch摄取并可视化　〔区分词：Open Cybersecurity Schema Framework，OCSF、Apache Parquet、CloudTrail、EKS、VPC、Ingestion、mazon〕

- A：从每个 SaaS 应用程序中摄取审计日志数据到 AWS AppFabric。将审计日志数据转换为 开放网络安全架构框架（Open Cybersecurity Schema Framework，OCSF）标准化的 Apache Parquet 格式。将日志发送到 Amazon Data Firehose，以便传送到 Amazon Security Lake S3 存储桶。
- D：将与 AWS CloudTrail 管理事件、AWS CloudTrail 数据事件 （针对 Amazon S3）、Amazon EKS 审计日志和 VPC 流日志相关的日志配置为 Amazon Security Lake 中的源。 将 AWS AppFabric 添加为 Security Lake 中的自定义源。
- F：配置 Amazon Security Lake 将来自不同源的安全数据通过 OpenSearch Ingestion 发送到 A mazon OpenSearch Service。使用 OpenSearch Service 仪表板创建安全数据的 可视化。

**#334｜A账户用户要承担B账户角色** → 记源用户允许AssumeRole、目标信任源主体、所有上限策略不阻挡（待核验）

- B：配置基于资源的策略以允许该操作。
- C：在账户 A 中的用户上配置基于身份的策略以允许该操作。
- E：在账户 B 中的目标角色上配置信任策略以允许该操作。

**#355｜S3只读明明允许却访问被拒** → 两处查SCP和Permissions Boundary，允许还要不过上限　〔区分词：OUs、SCP〕

- C：检查在组织单位（OUs）设置的 SCP。
- D：检查为 IAM 用户设置的权限边界。

**#357｜S3加CloudFront静态站要求静态和传输都加密** → 三步记桶开服务器端加密、桶策略拒绝不安全访问、CloudFront重定向HTTPS　〔区分词：HTTP、HTTPS〕

- A：为 web 应用程序使用的 S3 存储桶开启 S3 服务器端加密。
- C：创建一个存储桶策略，拒绝在 web 应用程序使用的 S3 存储桶中进行任何未加密的操作。
- E：在 CloudFront 中配置将 HTTP 请求重定向到 HTTPS 请求。

**#359｜开发设计师只准改生产S3静态资产** → 三把钥记生产读写桶策略、生产信任开发的角色、开发组获AssumeRole　〔区分词：sts:AssumeRole〕

- A：在生产账户中，创建一个新的 IAM 策略，允许对 S3 存储桶的读写访问。
- C：在生产账户中，创建一个角色。将新策略附加到该角色。将开发账户定义为受信任实体。
- E：在开发账户中，创建一个包含设计团队所有 IAM 用户的组。为该组附加一个不同的 IAM 策略 ，以允许在生产账户中对角色执行 sts:AssumeRole 操作。

**#367｜业务单元分账户但要统一付款与IAM治理** → 两步记Organizations收编账户统一账单、全功能加SCP设权限上限

- B：使用 AWS Organizations 从选定的付款账户创建一个新组织，并定义一个 组织单位层次结构。邀请现有账户加入该组织，并使用 Organizations 创建新 账户。
- D：启用 AWS Organizations 的所有功能，并建立适当的服务控制策略，以过滤 子账户的 1AM 权限。

**#381｜ECS容器要任务级最小网络和资源权限** → 两步记awsvpc独立网卡、任务安全组加Task Role　〔区分词：awsvpc〕

- B：使用 awsvpc 网络模式创建任务。
- E：将安全组应用于任务，并使用 IAM 角色让任务访问其他资源。

**#400｜跨账户EC2读S3只许授权网络经访问点** → 两步记VPC内S3网关端点、桶策略限定DataAccessPointArn　〔区分词：s3:、DataAccessPointArn〕（待核验）

- A：在数据科学家的 VPC 中为 Amazon S3 创建一个网关 VPC 端点。
- E：添加一个 S3 存储桶策略，条件是当 s3: 的值允许 s3:GetObject 操作时。 DataAccessPointArn 条件键是有效的访问点 ARN。

**#430｜Identity Center用户只读自己S3并每月报访问** → 两件套记主体userName标签限定前缀、CloudTrail数据事件加Athena统计　〔区分词：userName〕

- A：使用 IAM 身份中心权限集允许基于 userName 标签的 S3 访问。
- C：使用 AWS CloudTrail 记录 S3 数据事件，通过 Athena 查询。

**#443｜现有未来生产账户都要EBS加密和治理蓝图** → 三步记Control Tower分OU、组织邀请加SCP、生产OU启EBS检测控制　〔区分词：Organizations、SCP〕（待核验）

- C：在公司的管理账户中创建一个新的 AWS Control Tower 着陆区。分别将生产和开发账户添加到 生产和开发组织单元 (OU)。
- D：邀请现有账户加入 AWS Organizations 中的组织。创建服务控制策略 (SCP) 以确保合 规性。
- F：为生产 OU 创建一个护栏以检测 EBS 加密。

**#462｜DX Transit VIF要打通本地与多VPC** → 两向广播记本地前缀进DX、VPC前缀回本地　〔区分词：VPC〕

- B：通过传输 VIF 广播本地网络前缀。
- C：通过传输 VIF 从 Direct Connect 网关向本地网络广播 VPC 前缀。

**#472｜多账户只准领取获批基础设施且强制标签** → 三步记CFN封Service Catalog产品共享、终端用户权限加启动约束、TagOption统一标签　〔区分词：ServiceCatalogEndUserAccess〕

- B：使用 AWS CloudFormation 模板开发基础设施服务。将每个模板作为 AWS 服务目录产品上 传到在中央 AWS 账户中创建的投资组合。与为公司创建的组织结构共享这些投资组合。
- D：仅允许用户 IAM 角色具有 ServiceCatalogEndUserAccess 权限。使用自动化 脚本将中央 投资组合导入到本地 AWS 账户，复制 TagOption 分配用户访问权限并应用启动约束。
- E：使用 AWS 服务目录 TagOption 库维护公司所需标签的列表。 将 TagOption 应用到 AWS 服务目录产品或投资组合。

**#474｜收购账户入组织还要开发隔离查漏洞打补丁** → 三步记邀请并按标签分开发账户、Security Hub加Inspector、委派SSM补丁基线审计　〔区分词：SCP、Inspector〕

- A：邀请 AnyCompany 的账户加入组织。使用 SCP 强制所有新实例的标签要求。在一个 OU 下为 开发工作创建一个新账户。将带有开发环境标签的 EC2 实例重新创建到该账户中。
- D：在整个组织中配置 AWS Security Hub。配置 Amazon Inspector 对组织中的所有 EC2 实例 进 行每日安全检查。
- F：通过使用委派管理员账户在整个组织中配置 AWS Systems Manager Patch Manager。 创建 组织范围的补丁基线并配置合规性报告。

**#497｜只有中央采购团队可买改预留实例** → 两步记所有账户入全功能组织、SCP拒普通账户买改RI并保留采购路径　〔区分词：WS、SCP、OU〕

- A：WS Organizations 中的一个组织的一部分，并启用所有功能。
- D：创建一个 SCP，拒绝 ec2:PurchaseReservedInstancesOffering 操作和 ec2: 修改保留实例操作。将 SCP 附加到组织的每个 OU。

**#511｜导入虚机在SSM里找不到** → 两步查SSM Agent在跑、IAM实例角色有SSM权限　〔区分词：Agent、IAM〕

- A：验证 Systems Manager Agent 是否已安装在实例上并正在运行。
- B：验证该实例是否分配了适当的 IAM 角色以用于 Systems Manager。

**#518｜新IAM用户未审批前必须零访问** → 三步记CreateUser触发EventBridge、Step Functions移除权限、SNS通知审批　〔区分词：EventBridge、CloudWatch Events、detail-type、eventName、Step Functions〕

- A：EventBridge（Amazon CloudWatch Events）规则。定义一个模式，detail-type 值设置为 通过 CloudTrail 的 AWS API 调用，eventName 为 CreateUser。
- D：调用一个 AWS Step Functions 状态机来删除访问权限。
- E：使用 Amazon Simple Notification Service（Amazon SNS）通知安全团队。

**#552｜开发者实验账户要固定月预算防乱花** → 三步记Budgets月额、SCP禁昂贵服务、阈值SNS触发受控资源停用　〔区分词：Simple Notification Service、SNS、Lambda〕（待核验）

- B：使用 AWS Budgets 为每个开发者的账户创建一个固定的每月预算，作为账户 创建过程的一部分。
- C：创建一个 SCP 来拒绝访问高成本服务和组件。将 SCP 应用到开发者 账户。
- F：创建一个 AWS Budgets 警报操作，当预算金额达到时发送 Amazon Simple Notification Service（Amazon SNS） 通知。调用一个 AWS Lambda 函数以终止所有 服务。

**#553｜生产管理员被盗也不能毁备份** → 三件套记非生产账户跨账户备份、SCP保护保险库、Vault Lock合规模式　〔区分词：SCP、Vault Lock〕

- A：在指定的非生产账户中实施跨账户备份，使用 AWS Backup 保管库。
- B：添加一个 SCP，限制对 AWS Backup 保管库的修改。
- C：以合规模式实施 AWS Backup Vault Lock。

**#584｜应用EC2只准最小权限连Aurora** → 正确方向记应用出站到库、数据库入站信任应用安全组（待核验）

- A：向 EC2 实例的安全组添加入站规则。指定数据库集群的安全组作为 默认 Aurora 端口的源。
- B：向 EC2 实例的安全组添加出站规则。指定数据库集群的安全组作为 默认 Aurora 端口的目标。

**#601｜全组织只准东京且DataOps限定实例规格** → 两步记根SCP限制RequestedRegion、DataOps OU SCP限制InstanceType　〔区分词：aws:RequestedRegion、ec2:lnstanceType、DataOps OU〕

- C：创建一个服务控制策略（SCP）。使用 aws:RequestedRegion 条件键限制对所有 AWS 区域的访问 ，除了 ap-northeast-1。将 SCP 应用到根组织单元。
- E：创建一个 SCP 使用 ec2:lnstanceType 条件键限制对特定实例类型的访问 将 SCP 应用到 DataOps OU。

**#602｜S3对象所有活动留五年且每次尝试删除都通知** → 三件套记CloudTrail数据事件、删除API事件发SNS、独立日志桶生命周期五年　〔区分词：CloudTrail、EventBridge、SNS〕（待核验）

- A：配置 AWS CloudTrail 以记录 S3 数据事件。
- D：配置 Amazon S3 将对象删除事件发送到一个 Amazon EventBridge 事件总线，该总线 发布到一个 Amazon 简单通知服务 (Amazon SNS) 主题。
- F：配置一个新的 S3 存储桶以存储带有 S3 生命周期策略的日志。

**#605｜Identity Center科学家只看自己目录并审计** → 两步记PrincipalTag用户名限S3前缀、CloudTrail数据事件加Athena　〔区分词：aws:PrincipalTag/userName〕

- A：的 IAM 身份中心权限集，以授予数据科学家对与其用户名标签匹配的 S3 存储桶前缀的访问权 限。使用策略限制对路径的访问，条件为 ${aws:PrincipalTag/userName > / "。
- C：配置 AWS CloudTrail 以记录 S3 数据事件并将日志传送到 S3 存储桶。使用 Amazon Athena 在 Amazon S3 中对 CloudTrail 日志运行查询。

**#615｜CLI跨账户复制S3对象** → 三步记源桶策略允许目标读、目标用户策略允许两边读写、目标身份跑s3 sync

- B：创建一个桶策略，允许目标账户中的用户列出源桶的内容 并读取源桶的对象。将桶策略附加到源桶。
- D：在目标账户中创建一个 IAM 策略。配置该策略，允许目标账户中的用户 列出源桶中的内容和获取对象，并在目标桶中列出内容、放置对象和设置 对象 ACL。将该策略附加到用户。
- F：以目标账户中的用户身份运行 aws s3 sync 命令。指定源和目标 桶以复制数据。

**#622｜独立账户要统一账单并用Entra临时身份** → 三步记Organizations收账户、Identity Center接Entra同步组、Permission Set分账户权限　〔区分词：Azure Act ive Directory〕

- A：账户作为管理账户。在 AWS 组织中部署一个组织。邀请每个现有的 AWS 账户加入该组 织。确保每个账户接受邀请。
- C：在管理账户中部署 AWS IAM 身份中心（AWS 单点登录）。将 IAM 身份中心连接到 Azure Act ive Directory。配置 IAM 身份中心以自动同步用户和组。
- E：创建 AWS IAM 身份中心（AWS 单点登录）权限集。将权限集附加到适当的 IAM 身份中心组和 AWS 账户。

**#638｜多账户旧EBS未加密还要以后检测** → 两步记Control Tower组织检测控制、快照创建加密卷后替换原卷

- A：中创建一个组织。设置 AWS Control Tower，并启用强烈推荐的保护措施。将所有账户加 入该组织。将 AWS 账户分类到组织单元 (OUs) 中。
- C：为每个未加密卷创建快照。从未加密快照创建一个新的加密卷。分离现有卷，并用加密卷替 换它。

**#649｜部分ZIP Lambda才要代码漏洞扫描** → 三步记Inspector标准加代码扫描、启相关函数配置、排除函数打InspectorCodeExclusion标签　〔区分词：InspectorCodeExclusion、LambdaCodeScanning〕

- B：在 Amazon Inspector 中激活 Lambda 标准扫描和 Lambda 代码扫描。
- D：在需要代码扫描的 Lambda 函数的监控设置中启用扫描。
- E：标记不需要代码扫描的 Lambda 函数。在标签中包含一个键 InspectorCodeExclusion 和一个 值 LambdaCodeScanning。

**#657｜全组织九条Config规则要统一部署防成员改** → 两步记把四自定义五托管封合规包、委派管理员用组织API发布　〔区分词：rganizationConformancePack〕

- A：rganizationConformancePack API 操作，将合规包部署到整个组织。
- C：创建一个包含四个自定义策略规则和五个 AWS 托管规则的 AWS Config 一致性包。

**#662｜跨账户EC2漏Project标签影响分账** → 三步记各账户Config查漏、SCP挡无标签RunInstances、聚合器汇全组织　〔区分词：SCP〕

- A：在每个账户中创建一个 AWS Config 规则，以查找缺少标签的资源。
- B：在组织中创建一个 SCP，针对缺少 Project 标签的情况拒绝 ec2:RunInstances 操作。
- E：为组织创建一个 AWS Config 聚合器，以收集缺少 Project 标签的 EC2 实例列表。

**#672｜要按ALB真实访问找长期没用的白名单IP** → 两步记ALB访问日志加Athena、Lambda查每IP最后出现时间　〔区分词：Athena〕

- B：在 ALB 上启用访问日志。创建一个 Amazon Athena 表以查询 ALB 访问日志。
- D：编程 Lambda 函数以检查安全组中每个允许的 IP 地址最后一次出现在 ALB 访问日志中的 时间。

### 成本与计费

**#2｜应用和团队要分账并看历史预测** → 记“贴签、分组、看走势”：激活用户成本标签、建成本类别、开Cost Explorer

- A：激活表示应用程序和团队的用户定义成本分配标签。
- C：在计费与成本管理中为每个应用程序创建一个成本类别。
- F：启用成本探查器。

**#154｜EKS旧实例节省计划到期想继续降费** → 三步记镜像重编ARM64、节点换Graviton、买新实例系列Savings Plans　〔区分词：ARM64〕

- A：重建应用程序容器镜像以支持 ARM64 架构。
- C：将 EKS 节点迁移到最新一代基于 Graviton 的实例。
- E：为新选择的 Graviton 实例系列购买新的 EC2 实例节省计划。

**#243｜EC2按CPU内存网络做规格优化** → 两件套记Trusted Advisor找闲置、Compute Optimizer给尺寸建议　〔区分词：Trusted Advisor、Compute Optimizer〕（待核验）

- B：启用 AWS Trusted Advisor 并查看任何“低利用率 Amazon EC2 实例” 的建议。
- D：在 AWS 账户中配置 AWS Compute Optimizer 以接收发现和优化 建议。

**#249｜子公司要统一账单并保留分账户成本** → Organizations邀请各账户，合并账单统一结算再按账户明细分摊（待核验）

- B：使用 AWS Organizations 在父账户中创建一个单一的组织，然后邀请每个业务部门的 AWS 账户加入该组织。
- E：在父账户的账单控制台中启用合并账单，并链接业务部门账户。

**#410｜二十五账户要统一账单且只准美国区域** → 三步记组织全功能收账户、OU区域SCP、财务角色看集中账单和Cost Explorer　〔区分词：Organizations〕

- B：创建一个新的账户作为管理账户。在 AWS Organizations 中部署一个启用所有功能的组织。邀 请所有现有账户加入该组织。确保每个账户接受邀请。
- C：创建一个包含所有开发团队的组织单位（OU）。创建一个服务控制策略（SCP），仅允 许在位于美国的区域创建资源。将 SCP 应用到该 OU。
- E：在管理账户中创建一个 IAM 角色。附加一个包含查看计费和成本管理控制台权限的策略。允 许财务团队用户假设该角色。使用 AWS 成本探测器和计费与成本管理控制台分析成本。

**#417｜EKS M6i节省计划到期后要降费** → 三步记容器ARM64、节点Graviton、对应实例系列新Savings Plans　〔区分词：ARM64、EKS、C7g，M7g〕

- A：为 ARM64 架构重建容器。
- C：将 EKS 节点迁移到 Graviton（例如，C7g，M7g）。
- E：为 Graviton 实例系列购买新的节省计划。

**#440｜已知活动高峰且ECS读S3走NAT费高** → 两步记S3网关端点省NAT、容量提供者引入Spot并按活动预扩　〔区分词：VPC、Spot、ECS〕

- A：为 S3 存储桶创建一个网关 VPC 端点
- B：添加另一个使用 Spot 实例的自动扩展组的 ECS 容量提供者。配置新的容量提供者策略，使 其与现有容量提供者策略具有相同的权重。为适用的实例类型在计划扩展策略的时间段

**#457｜按应用团队分账并看过去未来十二月** → 三件套记激活用户标签、成本类别分组、Cost Explorer看历史预测

- A：激活代表应用程序和团队的用户定义成本分配标签。
- C：在账单和成本管理中为每个应用程序创建一个成本类别。
- F：启用成本探查器。

**#651｜静态前端加Python后端只午餐忙** → 前端搬S3，后端全Spot虽省钱但“不降可用性”须核验　〔区分词：Spot〕（待核验）

- B：将应用程序前端移动到托管在 Amazon S3 上的静态网站。
- D：将所有后端 EC2 实例更改为 Spot 实例。

### 数据存储与分析

**#48｜JSON事件要缓冲清洗再近实时画图** → 两件套记Firehose加Lambda洗数据、OpenSearch加Kibana看数据　〔区分词：Data Firehose、10、Elasticsearch Service、ES、Kibana〕

- A：使用 Amazon Kinesis Data Firehose 缓冲事件 创建一个 AWS Lambda 函数 10 处理和 转换 事件
- D：配置 Amazon Elasticsearch Service（Amazon ES）以接收事件 使用与 Amazon ES 部署 的 Kibana 端点创建近实时可视化和仪表板。

**#61｜Lambda查Aurora时连接太多** → 两步记Proxy池化只读端点、建连接移到handler外复用　〔区分词：RDS Proxy〕

- B：使用 RDS Proxy 设置与 Aurora 数据库的读取端点的连接池。
- D：将 Lambda 函数中打开数据库连接的代码移出事件处理程序。

**#98｜视频180天后少看且大文件常留未完成分段** → 两步记七天清未完分段、180天转Standard-IA　〔区分词：7、180、Standard-IA〕

- C：创建 S3 生命周期配置，在发起后 7 天使未完成的分段上传过期。
- E：创建 S3 生命周期配置，在 180 天后将对象转移到 S3 标准-不频繁访问（S3 Standard-IA）。

**#121｜科学家只访问自己目录且要知道谁读了什么** → 两步记IAM用用户名限定前缀、CloudTrail开对象事件再Athena查　〔区分词：aws:username〕

- A：授予用户读写访问权限。添加一个条件，指定 S3 路径必须以 ${aws:username} 为前缀。将 该策略应用于科学家的 IAM 用户 组。
- B：配置一个 AWS CloudTrail 跟踪，以捕获 S3 存储桶中的所有对象级事件。将跟踪 输出存储在另一个 S3 存储桶中。使用 Amazon Athena 查询日志并生成报告。

**#177｜HPC从百台扩千台后共享存储和通信拖慢** → 三件套记单AZ、EFA高速通信、FSx for Lustre共享存储　〔区分词：HPC、EFA、FSx、Lustre〕

- A：确保 HPC 集群在单个可用区内启动。
- C：选择启用弹性计算适配器（EFA）的 EC2 实例类型。
- F：用 Amazon FSx for Lustre 替换 Amazon EFS。

**#194｜SES投递要按收件人主题和时间查日志** → 两步记配置集经Firehose落S3、Athena查询投递事件　〔区分词：Data Firehose〕（待核验）

- A：创建一个 Amazon SES 配置集，以 Amazon Data Firehose 作为目标。选择将 日志发送到 Amazon S3 存储桶。
- C：使用 Amazon Athena 查询 Amazon S3 存储桶中的日志，以获取收件人、主题和发送时间。

**#223｜博客多作者共享文件又有200TB归档要快搬** → 两路记EFS给本地和EC2共享、Snowball搬大批归档　〔区分词：EFS、Snowball Edge〕

- C：将 Amazon 弹性文件系统（Amazon EFS）文件系统挂载到本地服务器，以充当 NAS 服务器。将博客数据复制到 EFS 文件系统。将 EFS 文件系统挂载到 EC2 实例以提供内容。
- D：订购一个 AWS Snowball Edge 存储优化设备。将静态数据工件复制到设备。 将设备运送到 AWS。

**#225｜爬虫EC2常闲且结果只需存文件** → 两步记Lambda消费SQS抓URL、结果直接写S3　〔区分词：Lambda、SQS、URLs〕

- B：使用 AWS Lambda 函数来运行网络爬虫过程。配置 Lambda 函数从 SQS 队列中提取 URLs。
- E：修改网络爬虫过程以将结果存储在 Amazon S3 中。

**#235｜视频180天后少读且分段上传常中断** → 两步记七天清未完分段、180天转Standard-IA　〔区分词：7、180、IA〕

- C：创建生命周期规则，在 7 天后过期未完成的分段上传。
- E：创建生命周期规则，在 180 天后将对象转换为 S3 标准-IA。

**#238｜IAM明明允许S3只读却拒绝列桶** → 两处再查OU的SCP上限和IAM用户权限边界　〔区分词：OUs、SCP〕

- C：检查在组织单位（OUs）设置的 SCP。
- D：检查为 IAM 用户设置的权限边界。

**#284｜MQTT加MongoDB加长报告要少运维** → 三件套记IoT Core接设备、DocumentDB存元数据、Step Functions加Lambda出报告到S3和CloudFront　〔区分词：DocumentDB、Step Functions、CloudFront〕

- B：配置物联网设备以发布到 AWS 物联网核心
- D：将元数据写入与 MongoDB 兼容的 Amazon DocumentDB
- E：使用 AWS Step Functions 状态机与 AWS Lambda 任务准备报告，并将 报告写入 Amazon S3 使用 Amazon CloudFront 和 S3 源提供报告

**#290｜Step Functions夜间重训失败没人知道** → 三步记SNS邮件主题、Email通知任务、各任务Catch错误转Email　〔区分词：ALL〕（待核验）

- A：”的Amazon简单通知服务（Amazon SNS）主题，目标是团队的邮件列表。
- B：创建一个名为“电子邮件”的任务，将输入参数转发到SNS主题
- C：添加一个Catch字段到所有任务映射，并且并行状态具有“错误等于” : [ “States. ALL”] 和 " Next " : " Email "。

**#309｜许可证绑MAC且数据库配置只认IP** → 两步记预建ENI池提前领许可证、Parameter Store读数据库IP注入配置

- A：创建一个 ENI 池。从供应商请求该池的许可证文件，并将许可证文件存储在 Amazon S3 中。创建一个引导自动化脚本以下载许可证文件并将 相应的 ENI 附加到 Amazon EC2 实例。
- D：编辑引导自动化脚本，从 AWS 系统管理器参数存储中读取数据库服务器 IP 地址，并将该 值注入到本地配置文件中。

**#321｜周五集中提交工时又要每月报表** → 两件套记S3加CloudFront及API Gateway/Lambda、S3数据配Athena和QuickSight报表　〔区分词：CloudFront、mazon、Gateway、Lambda、Athena〕

- C：将应用程序前端部署到由 Amazon CloudFront 提供服务的 Amazon S3 存储桶中。使用 A mazon API Gateway 和 AWS Lambda 代理集成部署应用程序后端。
- E：将时间表提交数据存储在 Amazon S3 中。使用 Amazon Athena 和 Amazon QuickSight 生成报告，使用 Amazon S3 作为数据源。

**#329｜远程员工挤满本地VPN带宽** → 两步记主目录搬FSx Windows、远程入口搬Client VPN　〔区分词：Windows、Client VPN〕

- B：将主目录迁移到 Amazon FSx for Windows 文件服务器。
- D：将远程用户迁移到 AWS Client VPN。

**#338｜DynamoDB闲置表仍需随时可用但要降费** → 三步记看月RCU/WCU识闲置、容量转按需、表类改Standard-IA　〔区分词：CloudWatch、ConsumedReadCapacityUnits、ConsumedWriteCapacityUnits、DynamoDB、DynamoDB Standard-IA〕

- B：在 Amazon CloudWatch 中，绘制每个表在 1 个月内的 ConsumedReadCapacityUnits 指标 总和和 ConsumedWriteCapacityUnits 指标总E.
- D：将未使用表的容量模式更改为按需模式。
- E：将未使用表的表类更改为 DynamoDB 标准-不频繁访问（DynamoDB Standard-IA）。

**#339｜DynamoDB数据要无服务器HTTPS API** → 两条可行路记REST API直集成DynamoDB、HTTP API经Lambda访问表　〔区分词：REST〕

- A：一个 Amazon API Gateway REST API。使用 API Gateway 的 AWS 集成类型将此 API 配置为直 接集成到 DynamoDB。
- C：创建一个 Amazon API Gateway HTTP API。将此 API 配置为与返回来自 DynamoDB 表的 数据的 AWS Lambda 函数集成。

**#349｜MySQL故障转移四十秒要降到二十秒内** → 三件套记迁Aurora、加Aurora副本、RDS Proxy稳定连接　〔区分词：Proxy〕

- C：在数据库前使用 RDS Proxy
- D：将数据库迁移到 Amazon Aurora MySQL
- E：创建一个 Amazon Aurora 副本

**#350｜全站必须HTTPS且HTTP用户不能报错** → 源站只HTTPS，查看器选重定向HTTPS，原E和F互斥须核验（待核验）

- D：将 CloudFront 的源协议策略设置为仅 HTTPS。
- E：将 CloudFront 的查看器协议策略设置为仅 HTTPS。
- F：将 CloudFront 的查看器协议策略设置为将 HTTP 重定向到 HTTPS。

**#402｜PHP前端加Java单体和60TB PostgreSQL要少改迁云** → 三层记前端ALB加ASG和EFS、Java用Beanstalk、DMS迁Aurora配读副本伸缩　〔区分词：EC2、web、EFS、Elastic Beanstalk、DMS、Aurora〕

- A：配置一个 Amazon EC2 实例的自动扩展组，位于应用负载均衡器后面以 托管 web 服务器。使用 Amazon EFS 存储前端静态资产。
- D：为 Java 创建一个 AWS Elastic Beanstalk 环境以托管 Java SE 应用程序。
- F：使用 AWS DMS 将 PostgreSQL 数据库重新平台到 Amazon Aurora PostgreSQL 数据库。 对读取副本使用 Aurora 自动扩展。

**#413｜欧洲无服务器文档平台全球上传和API慢** → 两步记S3传输加速签名URL、API Gateway边缘优化端点　〔区分词：Web、URL、Gateway〕

- A：在 S3 存储桶上启用 S3 传输加速。确保 Web 应用程序使用传输 加速签名 URL。
- C：将 API Gateway 区域端点更改为边缘优化端点。

**#435｜高峰故障日志丢失且数据库查询看不清** → 三件套记Aurora慢查错误日志、Java X-Ray调用链、EC2 Agent实时送Apache日志　〔区分词：SDK、HTTP、Java、S DK、SQL、Logs、Apache、L ogs〕

- A：配置 Aurora MySQL 数据库集群以将慢查询和错误日志发布到 Amazon CloudWatch 日志。
- B：实施 AWS X-Ray SDK 以跟踪 EC2 实例上的传入 HTTP 请求，并使用 Java 的 X-Ray S DK 实现 SQL 查询的跟踪。
- D：装并配置 Amazon CloudWatch Logs 代理在 EC2 实例上将 Apache 日志发送到 CloudWatch L ogs。

**#439｜欧洲用户静态站和30天后少读内容要省钱** → 题库记CloudFront价格类加S3归档，但地区和恢复时延须核验　〔区分词：Glacier Deep Archive、CloudFront、200〕（待核验）

- B：在 30 天后将 S3 内容转移到 Glacier Deep Archive。
- E：使用 CloudFront 价格类别 200（仅限欧洲和美国）。

**#471｜全球杂志首发大读高峰要低响应** → 两套动作记全球Aurora及区域副本、Route 53延迟加CloudFront和ASG　〔区分词：Route 53、CloudFront〕

- D：使用 Aurora 全球数据库进行物理跨区域复制。使用 Amazon S3 进行静态内容和资源的 跨区域复制。在全球各地的区域中部署 Web 和应用层。
- E：引入 Amazon Route 53 进行基于延迟的路由和 Amazon CloudFront 分发。确保 Web 和应用 层各自处于自动扩展组中。

**#485｜图像处理Lambda最大超时仍失败又不管主机** → 两步记代码打Docker进ECR、ECS Fargate接长任务　〔区分词：Docker、WS Fargate〕

- A：通过构建一个包含应用程序代码的 Docker 镜像来修改应用程序部署。 将镜像发布到 Amazon Elastic Container Registry (Amazon ECR)。
- B：创建一个新的 Amazon Elastic Container Service (Amazon ECS) 任务定义，兼容类型为 A WS Fargate。配置任务定义以使用 Amazon Elastic Container Registry (Amazon ECR) 中的 新镜像。当新文件到达 Amazon S3 时，调整 Lambda 函数以使用 ECS 任务定义调用 ECS 任务。

**#492｜S3事件处理图像超过Lambda十五分钟** → 两步记ECR存Docker镜像、EventBridge触发ECS Fargate任务　〔区分词：ECR、Fargate、Do cker、EventBridge〕

- A：构建一个包含应用程序代码的 Docker 容器镜像以进行部署。将容器镜像存储在 Amazon ECR 中。
- D：创建一个新的 Amazon ECS 部署，使用 Fargate 启动类型。配置 ECS 任务定义 以使用新的 Do cker 容器镜像。配置 EventBridge 使用 ECS 任务定义调用 ECS 任务。

**#507｜DataSync只传相关数据且完成立刻通知** → 三步记生成上传Manifest、S3触发Lambda启动任务、任务成败经EventBridge发SNS　〔区分词：StartTaskExecution、EventBridge〕

- A：过程，在复制过程结束时创建一个清单文件，列出要复制到 Amazon S3 的对象名称。创建一 个自定义脚本，将清单文件上传到 S3 存储桶。
- D：创建一个 AWS Lambda 函数，当清单文件上传时由 S3 事件通知调用。配置 Lambda 函 数通过调用 StartTaskExecution API 操作并使用清单来调用 DataSync 任务。
- E：创建一个 Amazon SNS 主题。创建一个 Amazon EventBridge 规则，当 DataSync 任务执行 状态更改为 SUCCESS 或 ERROR 时，向 SNS 主题发送电子邮件通知。

**#548｜S3对象十五分钟必须到备区否则通知** → 两步记跨区复制规则、S3 RTC加MissedThreshold事件发SNS　〔区分词：RTC、OperationMissedThreshold〕

- A：创建一个新的 S3 复制规则。配置该规则以将所有对象复制到第二个 S3 存储桶。
- C：启用 S3 复制时间控制（S3 RTC），并配置复制指标和事件。创建一个 Amazon SNS 主题并将其设置为 OperationMissedThreshold S3 事件通知的目标。 使用 SNS 主题通知运营团队。

**#549｜每周维护时CloudFront要展示信息页** → 三步记信息页放S3、加入原分发第二源、维护时切默认行为完后切回　〔区分词：OAI〕

- A：将静态信息内容上传到 S3 存储桶。
- C：将 S3 存储桶设置为原始 CloudFront 分发中的第二个源。配置分发和 S3 存储桶以使用源访 问身份 (OAI)。
- D：在每周维护期间，编辑默认缓存行为以使用 S3 源。维护完成后恢复更改。

**#583｜欧洲源天气图在美东读缓存未命中时慢** → 两步记S3跨区复制到美东、Lambda@Edge按北美请求改美东源　〔区分词：eu-west-1〕

- B：在 us-east-1 中创建一个新的 S3 存储桶。配置 S3 跨区域复制以从位于 eu-west-1 的 S3 存储 桶进行同步。
- D：使用 Lambda@Edge 修改来自北美的请求，以使用位于 us-east-1 的 S3 存储桶。

**#654｜MQTT加MongoDB和报告要托管少运维** → 三件套记IoT Core加Lambda解析、DocumentDB兼容MongoDB、Step Functions出报告到S3和CloudFront　〔区分词：Step Functions、S、CloudFront、Core、DocumentDB〕

- A：创建 AWS Step Functions 状态机，使用 AWS Lambda 任务准备报告并将报告写入 Amazon S 3。配置一个具有 S3 源的 Amazon CloudFront 分发，以提供报告。
- D：将 IoT 设备连接到 AWS IoT Core 以发布消息。创建一个 AWS IoT 规则，当接收到消息时 运行。配置该规则以调用 AWS Lambda 函数。编程 Lambda 函数以解析、转换并将设备消息数据存储到数据存储中。
- E：将 MongoDB 集群迁移到 Amazon DocumentDB。

**#665｜B账户用户要读A账户S3但策略图缺失** → 两道门记A桶策略放B主体、B用户策略允许读A桶，具体CD内容待核验　〔区分词：B〕（待核验）

- C：在账户 A 中，将 S3 存储桶策略设置为以下内容：
- D：在账户 B 中，将 User_DataProcessor 的权限设置为以下内容：

**#670｜EC2 EFS RDS统一备份跨区并失败即通知** → 三步记Backup按保留期计划、跨区复制、EventBridge或保险库SNS订阅失败事件　〔区分词：Simple Notification Service、SNS、BACKUP-JOB-COMPLETED〕（待核验）

- A：为每个保留要求创建一个带有备份规则的 AWS 备份计划。
- B：配置一个 AWS 备份计划，将备份复制到另一个区域。
- D：将一个 Amazon Simple Notification Service（Amazon SNS）主题添加到备份计划中，以发 送通知，通知已完成的作业状态为除 BACKUP-JOB-COMPLETED 以外的任何状态。

**#677｜IoT API过载且MySQL写延迟要永久扩展** → 原BE同时要Aurora与DynamoDB两个替代库，组合相互冲突　〔区分词：Aurora、DynamoDB〕（待核验）

- B：重新构建数据库层，使用 Amazon Aurora 替代 RDS MySQL 数据库实例，并添加 只读副本。
- E：重新构建数据库层，使用 Amazon DynamoDB 而不是 RDS MySQL 数据库实例

### 网络与连接

**#90｜UDP匹配服务上云要安全且题目说选三项** → 已给两项记NLB接UDP加NACL过滤，缺第三项先核验　〔区分词：NLB、ACL〕（待核验）

- A：在玩家匹配实例前使用网络负载均衡器（NLB）。在 Amazon Route 53 中使用友好的 DNS 条目指向地址。
- D：配置网络 ACL 规则以阻止所有非 UDP 流量。将网络 ACL 关联到持有负载均衡的 子网

**#92｜Lambda既访问VPC内Neptune又访问DynamoDB** → 两条可行路记私有子网加NAT，或隔离子网加DynamoDB端点　〔区分词：NAT、DynamoDB〕

- B：在 Neptune VPC 中创建三个私有子网，并通过 NAT 网关路由互联网流量。 在这三个新的私有子网中托管 Lambda 函数。
- E：在 Neptune VPC 中创建三个私有子网。在这三个新的隔离 子网中托管 Lambda 函数。为 DynamoDB 创建 VPC 端点，并将 DynamoDB 流量路由到 VPC 端点。

**#125｜跨账户私有域记录正确却在新VPC解析不了** → 两步记域账户先授权关联、VPC账户关联后撤临时授权

- C：创建一个授权，将账户 A 中的私有托管区域与账户 B 中的新 VPC 关联
- E：将账户 B 中的新 VPC 与账户 A 中的托管区域关联。删除账户 A 中的关联授权。

**#130｜数百VPC接本地还要控制谁能互通** → 三步记TGW用RAM共享、挂VPC和VPN、分TGW路由表控互通　〔区分词：RAM〕

- A：在一个 AWS 账户中创建一个传输网关。通过使用 AWS 资源访问管理器（AWS RAM）在账户 之间共享传输网关。
- B：配置所有 VPC 和 VPN 的附件。
- C：设置传输网关路由表。将 VPC 和 VPN 与路由表关联。

**#201｜本地DNS要解析VPC私有域** → 三步记建私有托管区并关联、建Resolver入站端点、本地条件转发到入站IP　〔区分词：DNS〕

- A：为 myvpc.example.com 域名创建一个 Amazon Route 53 私有托管区域。将该域名与 VPC 关联。
- C：使用 Amazon Route 53 Resolver 在 VPC 的 AWS 区域中创建一个入站端点。
- F：配置本地 DNS 解析器，使用条件转发规则处理对 Amazon Route 53 私有托管区域域名和入 站端点的 IP 地址的 DNS 查询。

**#205｜五十个跨区VPC只要调用管理VPC许可证服务** → NLB封装许可证服务，PrivateLink端点给各VPC按需私接　〔区分词：NLB、PrivateLink〕（待核验）

- A：创建一个传输网关，将公司所有的 VPC 和相关子网附加到传输网关。创建公司所有 VPC 之
- C：创建一个指向许可证验证计算资源的网络负载均衡器（NLB）。 创建一个可供每个客户的 VPC 使用的 AWS PrivateLink 端点服务。将端点服务与 NLB 关联 。

**#218｜旧安全工具必须实时检查全部进出流量** → 两步记EC2加ASG跑工具、GWLB引流并扩展安全设备　〔区分词：EC2〕

- A：在现有 VPC 中的新自动扩展组中部署 EC2 实例上的安全工具。
- D：为每个可用区配置一个网关负载均衡器，以将流量重定向到安全工具。

**#219｜安全分析进程坏了换机却路由仍指旧机** → 三步记Agent上报进程、告警发SNS、Lambda摘旧机并更新路由　〔区分词：Lambda〕

- B：更新 Cloud Formation 模板以在 EC2 实例上安装 Amazon CloudWatch 代理。 配置 CloudWatch 代理以发送应用程序的进程指标。
- D：为 Amazon CloudWatch 中的自定义指标创建一个警报，以应对故障场景。配置 警报以向 Amazon 简单通知服务 {Amazon SNS} 主题发布消息。
- E：创建一个 AWS Lambda 函数，响应 Amazon 简单通知服务 (Amazon SNS) 消息，将实例移出服务。更新网络路由以指向替换 实例。

**#242｜PrivateLink接中央日志服务失败** → 两处查NLB与服务子网双向NACL、服务实例安全组放行NLB来源

- A：到日志服务子网，以允许与 NLB 子网之间的通信。检查 NACL 是否附加到 NLB 子网，以允 许与运行在 EC2 实例上的日志服务子网之间的通信。
- C：检查运行在 EC2 实例上的日志服务的安全组，以确保它允许来自 NLB 子网的入站流量。

**#257｜跨账户数据湖每应用最小权限且只走私网** → 两层记每应用VPC限制访问点并锁桶、各VPC建S3网关端点

- A：AWS 账户中的每个应用程序创建一个 S3 访问点。配置每个访问点仅能从应用程序的 VPC 访 问。更新存储桶策略以要求通过访问点访问。
- C：在每个应用程序的 VPC 中为 Amazon S3 创建一个网关端点。配置端点策略以允许访问 S3 访问 点。指定用于访问访问点的路由表。

**#289｜Tomcat加MySQL跨VPC网站高流量宕机** → 三步记ALB后多EC2 ASG、Aurora加副本、网站补另一AZ子网　〔区分词：EC2、MySQL、Aurora〕

- A：EC2 实例，并置于应用程序负载均衡器后面
- C：将 MySQL 数据库迁移到带有一个 Aurora 副本的 Amazon Aurora
- F：在网站 VPC 中创建一个不同可用区的额外公共子网

**#305｜多团队同区用共享VPC且本地流量不到50Mbps** → 两件套记共享服务账户VPC经RAM共享子网、Site-to-Site VPN接本地　〔区分词：CloudFormation〕

- B：创建一个 AWS CloudFormation 模板，以配置一个 VPC 和所需的子网。将模板部署到共享服 务账户，通过 AWS 资源访问管理器共享子网。
- D：使用 AWS Site-to-Site VPN 连接到本地网络。

**#307｜跨区S3就近访问且本地上传全程私网** → 两件套记S3多区域访问点、Direct Connect加PrivateLink　〔区分词：PrivateLink、Direct Connect〕

- A：实施 S3 多区域访问点。
- E：使用 AWS PrivateLink 和 AWS Direct Connect 连接到多区域访问点。

**#336｜澳洲上传1到10GB视频常失败** → 两步记S3传输加速、分段上传可并行重试

- A：3 传输加速在 S3 存储桶上配置应用以使用传输加速端点进行上传。
- D：配置应用程序以将视频文件分成多个块，使用分段上传将文件传输到 Amazon S3。

**#370｜跨账户VPC对等创建失败** → 两处查CIDR是否重叠、接受方IAM角色权限是否足够　〔区分词：IPv4 CIDR、IAM〕

- A：这两个 VPC 的 IPv4 CIDR 范围重叠
- E：对等接受方账户中的 IAM 角色没有正确的权限

**#475｜本地要私网写三个账户S3且还没有专线** → 两步记网络账户建DX私有VIF、同VPC建S3接口端点

- A：在 AWS 云中建立一个网络账户，在网络账户中创建一个私有 VPC。设置一个 AWS Direct Con nect 连接，通过私有 VIF 在本地环境和私有 VPC 之间进行连接。
- C：在网络账户中创建一个 Amazon S3 接口端点。

**#509｜本地私网接三地区VPC还要访问公共服务** → DX私有路径连VPC，公共VIF供公共服务及加密VPN路径（待核验）

- A：创建一个 Direct Connect 网关。将 Direct Connect 连接附加到 Direct Connect 网关。 使用
- E：创建一个公共 VIF.通过公共 VIF 建立与其他两个区域的 VPC 的 AWS 站点到站点 VPN 连接。

**#515｜中央团队管网络其他账户只在子网建资源** → 应RAM共享VPC子网给OU，原共享前缀列表不等于共享网络（待核验）

- A：在基础设施账户中创建一个传输网关。
- E：在基础设施账户的 AWS Resource Access Manager 中创建一个资源共享。选择将使用共 享网络的特定 AWS Organizations OU。选择每个前缀列表以与 资源共享关联。

**#524｜多个VPC都要私网解析本地internal域** → 三步记Resolver出站端点、该域条件转发到本地、规则关联所有VPC　〔区分词：internal.company.com、DNS〕

- B：在一个 VPC 中创建一个 Route 53 出站端点。
- C：创建一个 Route 53 转发规则，将 internal.company.com 转发到本地 DNS。
- E：将规则与所有 VPC 关联。

**#532｜PrivateLink多AZ传输费用高** → 两步记NLB关闭跨可用区负载均衡、消费者用本AZ端点DNS　〔区分词：DNS〕（待核验）

- C：在所有服务提供商应用程序部署中关闭网络负载均衡器的跨区域负载均衡。
- D：确保服务消费者计算资源使用特定于可用区的端点服务，通过使用端点的本地 DNS 名称。

**#598｜CloudFront后ALB报错时要自定义错误页** → 核心记CloudFront Custom Error Response指S3错误页面　〔区分词：Route 53、CloudFront〕（待核验）

- C：通过添加健康检查来修改现有的 Amazon Route 53 记录。如果健康检查失败，配置一个后备 目标。修改 DNS 记录以指向一个可公开访问的网页。
- E：通过配置 CloudFront 自定义错误页面添加自定义错误响应。修改 DNS 记录以 指向一个可公开访问的网页。

**#619｜数百账户VPC接专线且所有出网经本地NAT** → 三步记DX Gateway加TGW、RAM共享并挂VPC、私有子网默认路由回本地　〔区分词：VIF、NAT〕

- B：在中央网络账户中创建一个 Direct Connect 网关和一个传输网关。通过使用传输 VIF 将传输网 关附加到 Direct Connect 网关。
- D：与其他账户共享传输网关。将 VPC 附加到传输网关。
- F：仅配置私有子网。打开传输网关和客户网关上的必要路由，以允许来自 AWS 的出站互联网流 量通过在数据中心运行的 NAT 服务。

**#644｜每新成员账户自动建VPC并接中央TGW** → 两步记RAM共享TGW、StackSets自动部署VPC与TGW附件

- A：从管理账户，通过 AWS 资源访问管理器与成员账户共享传输网关
- C：从管理账户启动一个 AWS CloudFormation 堆栈集，该堆栈集自动创建一个 新的 VPC 和一个 VPC 传输网关附件在成员账户中。通过使用传输网关 ID 将附件与 管理账户中的传输网关关联。

**#646｜跨账户Oracle转PostgreSQL少停机且端点走CNAME** → 三步记SCT转模式建目标、VPC Peering连通、DMS全量CDC追平后切CNAME　〔区分词：SCT、DMS〕

- A：的 RDS for PostgreSQL 数据库实例使用 AWS 架构转换工具（AWS SCT）将数据库架构从源数 据库迁移到目标数据库使用 AWS 架构转换工具（AWS SCT）在目标账户中创建一个新的
- C：在两个 AWS 账户之间配置 VPC 对等连接，以便从目标账户访问两个数据库实例。配置附加 到每个数据库实例的安全组，以允许来自目标账户 VPC 的数据库端口流量。
- E：在目标账户中使用 AWS 数据库迁移服务 (AWS DMS) 执行从源数据库到目标数据库的全量加 载加变更数据捕获 (CDC) 迁移。当迁移完成后，修改 CNAME 记录以指向目标数据库实 例端点。在目标账户中使用 AWS 数据库迁移服务 (AWS DMS) 执行从源数据库到目标

**#658｜IPv6分别测试公共入站和私有只出站** → 两条路径记公共子网::/0到IGW、私有子网::/0到Egress-only IGW

- C：在公共子网中启动一个 Amazon EC2 实例。在启动期间将 IPv6 地址与实例关联。为 IPv6 通信配置安全组、网络 ACL 和路由表。 创建一条将所有来自公共子网的 IPv6 流量指向互联网网关的路由。
- E：将一个 Amazon EC2 实例启动到私有子网。在启动期间为实例关联一个 IPv6 地址。配置一 个安全组、一个网络 ACL 和路由表以支持 IPv6 通信。 创建一条将所有来自私有子网的 IPv6 流量指向仅出站互联网网关的路由。

**#664｜DRS复制不走公网且别占满带宽** → DX加DX Gateway、复制选私有IP，仍须显式配带宽限速　〔区分词：Direct Connect、Direct Conne ct〕（待核验）

- B：创建一个至少包含两个公共子网、一个虚拟私有网关和一个互联网网关的 VPC。
- D：在本地网络和目标 AWS 网络之间创建一个 AWS Direct Connect 连接和一个 Direct Conne ct 网关。
- E：在配置复制服务器时，选择使用私有 IP 地址进行数据 复制的选项。

**#667｜跨VPC防火墙出网要快故障切换** → 三件套记双AZ设备、GWLB目标组挂设备、GWLB端点加路由引流

- A：在共享服务 VPC 中部署两个防火墙设备，每个设备位于不同的可用区。
- C：在共享服务 VPC 中创建一个新的网关负载均衡器。创建一个新的目标组，并将 其附加到新的网关负载均衡器。将每个防火墙设备实例添加到目标组。
- F：创建一个 VPC 网关负载均衡器端点。向共享服务 VPC 的路由表中添加一条路由。将新端点 指定为从其他 VPC 进入共享服务 VPC 的流量的下一跳。

**#669｜十域名按JSON跳转且支持HTTP和HTTPS** → 三件套记Lambda查域名返回跳转、CloudFront加Lambda@Edge、ACM含所有域SAN　〔区分词：CloudFront、Edge、Certificate Manager (ACM、SSL〕

- C：创建一个 AWS Lambda 函数，使用 JSON 文档结合事件消息 查找并响应重定向 URL。
- E：创建一个 Amazon CloudFront 分发。部署一个 Lambda@Edge 函数。
- F：使用 AWS Certificate Manager (ACM) 创建 SSL 证书。将域名作为主题 替代名称包含。

**#682｜SAML门户自己能进但测试用户进不去** → 三处查角色信任SAML主体、STS AssumeRoleWithSAML三参数、断言用户组到角色映射　〔区分词：STS AssumeRoleWithSAML、ARN、1AM〕

- B：为联合用户或联合组创建的 IAM 角色的信任策略已将 SAML 提供者设置为主体
- D：网页门户调用 AWS STS AssumeRoleWithSAML API，使用 SAML 提供者的 ARN、 IAM 角色的 ARN 和来自身份提供者的 SAML 断言
- F：断言，正确地将公司中的用户或组映射到具有适当权限的 1AM 角色

### 弹性与性能

**#183｜单EC2单Redis单MariaDB都不能自动恢复** → 三层记ALB加ASG至少两台、RDS多AZ、Redis复制组多AZ

- A：使用弹性负载均衡器将流量分配到多个 EC2 实例。确保 EC2 实例属于一个最小容量为两个实例的自动扩展组。
- D：修改数据库实例以创建跨两个可用区的多可用区部署。
- F：为 ElastiCache for Redis 集群创建一个复制组。启用集群的多可用区。

**#240｜ASG补丁重启换回未打补丁的机器** → 两步记ALB健康承接、补丁烘进AMI更新模板再Instance Refresh　〔区分词：AMI〕

- C：在自动扩展组前面创建一个弹性负载均衡器。配置监控以确保目标组健康检查在自动扩展组替 换终止的实例后返回健康状态。
- D：创建自动化脚本以修补 AMI，更新启动配置，并调用自动扩展实例刷新。

**#358｜白天海量手机图像上传处理后通知** → 三步记直传S3通知SQS、Lambda消费处理、SNS推送完成　〔区分词：Am azon SQS、Lambda、SNS〕

- B：直接从移动软件上传文件到 Amazon S3。使用 S3 事件通知在 Amazon 简单队列服务（Am azon SQS）标准队列中创建消息。
- C：当队列中有消息时，调用 AWS Lambda 函数进行图像处理。
- E：处理完成后，通过 Amazon 简单通知服务（Amazon SNS）向移动应用发送推送通知。

**#386｜智能电表Lambda限流且DynamoDB写超额** → 两步记增表WCU、API先写Kinesis再批量处理削峰　〔区分词：DynamoDB、Gateway、Kinesis〕

- A：增加DynamoDB表的写入容量单位。
- D：从API Gateway将数据流入Amazon Kinesis数据流，并批量处理数据。

**#387｜同一批URL要从多个区域访问并写回原S3** → 两步记各区部署SQS加Lambda、原区域SNS向各区队列扇出　〔区分词：SOS〕（待核验）

- A：将 SOS 队列与 Lambda 函数部署到其他区域。
- C：在每个区域中将 SQS 队列订阅到每个区域的 SNS 主题。

**#453｜照片突发丢处理且DynamoDB写入不足** → 两步记调高WCU、S3与Lambda之间加SQS和重试　〔区分词：WCUs、Simple Queue Service、SQS〕

- B：评估并调整 DynamoDB 表的 WCUs。
- D：在 Amazon S3 和 Lambda 函数之间添加一个 Amazon Simple Queue Service (Amazon SQS) 队列和重新处理逻辑。

**#500｜跨账户CloudWatch日志要同区聚合转换再送安全工具** → 三步记中央Kinesis、订阅角色及过滤器、Lambda标准化转发

- A：在中央日志账户中创建一个目标 Amazon Kinesis 数据流。
- C：创建一个 IAM 角色，授予 Amazon CloudWatch Logs 向 Amazon Kinesis 数据流添加数据 的权限。创建一个信任策略。在 IAM 角色中指定信任策略。在每个成员账户中，为每个日 志组创建一个订阅过滤器，以将数据发送到 Kinesis 数据流。
- E：创建一个 AWS Lambda 函数。编程 Lambda 函数以在中央日志账户中规范化日志，并将日 志写入安全工具。

**#535｜Kinesis多消费者被读取吞吐限流** → 三步记加分片、Enhanced Fan-out独享读、指数退避重试

- A：重新分片流以增加流中的分片数量。
- C：使用具有增强的扇出功能的消费者。
- E：在消费者逻辑中使用错误重试和指数退避机制。

**#566｜多账户日志同区中央聚合再标准化** → 三步记中央Kinesis、CloudWatch订阅及授权角色、Lambda转换发安全工具

- A：在中央日志账户中创建一个目标 Amazon Kinesis 数据流。
- C：创建一个 IAM 角色，授予 Amazon CloudWatch Logs 向 Amazon Kinesis 数据流添加数据的权限。创建一个信任策略。在 IAM 角色中指定信任策略。在每个成员 账户中，为每个日志组创建一个订阅过滤器，以将数据发送到 Kinesis 数据流。
- E：创建一个 AWS Lambda 函数。编程 Lambda 函数以在中央日志账户中规范化日志，并将日 志写入安全工具。

### 部署与治理

**#227｜Kubernetes要托管监控扫描且共享盘支持SMB和NFS** → 两件套记EKS加托管Prometheus/Grafana和ECR增强扫描、FSx ONTAP多协议卷　〔区分词：NetApp ONTAP〕

- B：用 AWS 管理的多节点 Amazon EKS 集群替换现有的 Kubernetes 集群。设置 Amazon 管 理的 Prometheus 和 Amazon 管理的 Grafana 进行监控。 将应用程序 Docker 镜像存储在 Amazon ECR 中。启用 ECR 增强扫描。
- E：配置一个 Amazon FSx for NetApp ONTAP 文件系统。将文件系统挂载到在 Amazon EKS 集群上启动的容器中，作为持久卷。

**#525｜组织EC2要按九十天CPU内存给规格建议** → Compute Optimizer组织信任加Agent内存指标，九十天需增强基础设施指标　〔区分词：timizer、CloudWatch、Trusted Advisor〕（待核验）

- A：timizer，并为组织启用 Compute Optimizer 的受信访问。
- D：在所有 EC2 实例上安装并配置 Amazon CloudWatch 代理，以将内存 利用率指标发送到 CloudWatch。
- F：配置 AWS Systems Manager 将指标传递给 AWS Trusted Advisor。

**#592｜ASG重启后总换回没补丁的旧镜像** → 两步记ALB承接并看健康、SSM出新AMI更新模板再实例刷新　〔区分词：ALB、Systems Manager、AMI〕

- C：在自动扩展组前面部署一个应用程序负载均衡器（ALB）。在实例替换后监控目标组的健康状 况。
- D：使用 AWS Systems Manager 自动生成已打补丁的 AMI。更新自动扩展组的启动模板。为自 动扩展组启动实例刷新。

### 高可用与灾备

**#236｜电商EC2加DynamoDB要跨区增长灾备和提速** → 三步记CloudFormation复制基础设施、Route 53延迟路由、DynamoDB全球表　〔区分词：CloudFormation〕

- A：为当前基础设施设计创建一个 AWS CloudFormation 模板。使用参数来 表示重要的系统值，包括区域。使用 CloudFormation 模板在第二个区域创建新的 基础设施。
- D：更新应用程序的 Route 53 托管区域记录以使用基于延迟的路由。将流量发送到 每个区域的 ALB。
- E：通过启用 DynamoDB Streams 更新现有 DynamoDB 表的配置。添加第二个区域以创建全 球表。

**#263｜DRS复制要专线私网且最多占75%带宽** → 三件套记私有子网网络、DX加DX Gateway、复制用私有IP并限速75%　〔区分词：NAT、Direct Connect、Direct Conne ct〕

- A：创建一个至少包含两个私有子网、两个 NAT 网关和一个虚拟私有网关的 VPC。
- D：在本地网络和目标 AWS 网络之间创建一个 AWS Direct Connect 连接和一个 Direct Conne ct 网关。
- E：配置复制服务器使用私有 IP 地址进行数据复制。对复制实例配置限流，以确保弹性灾难恢复服 务器的带宽不超过可用带宽的 75%。

**#293｜电商ECS跨区扩展还缺证书镜像和数据库** → 三件套记备区ACM证书、ECR复制并重推旧镜像、Aurora全球库写转发

- A：为公司网站在第二个区域请求新的 ACM 证书。配置第二个区域的 ALB 以使用 HTTPS 监听器 。将新的 ACM 证书设置为默认证书。
- D：为 ECR 存储库启用跨区域复制到第二个区域。将现有镜像重新推送到带有新标签的 ECR 存 储库。
- E：在主区域配置 Aurora 全球数据库。启用写入转发到第二个区域。

**#396｜前端不忙数据库查询却高负载** → 两件套记RDS读副本分读、ElastiCache缓存热点　〔区分词：ElastiCache〕（待核验）

- A：为 Amazon RDS MySQL 配置只读副本，并在 Web 应用程序中使用单一读取端点，以减 少后端数据库层的负载。
- E：配置一个 Amazon ElastiCache 集群，并将其放置在 Web 应用程序和 RDS MySQL 实例之间 ，以减少后端数据库层的负载。

**#466｜九成五只读网站扩第二区域要低延迟** → 两步记Aurora全球库及备区ALB/ASG、Route 53延迟路由　〔区分词：SQL、AL B〕

- A：SQL 数据库迁移到 Amazon Aurora MySQL 全球数据库。在新区域创建一个 ALB。在新的 AL B 后面部署一个新的 EC2 自动扩展组。
- C：在 Route 53 中配置基于延迟的路由。添加一个新的记录，指向两个 ALB。

**#501｜两区域S3应用双活且对象同步** → 三件套记Multi-Region Access Point、双向CRR、两桶开Versioning　〔区分词：CRR〕

- A：创建一个 S3 多区域访问点。更改应用程序以引用多区域访问点。
- B：在两个 S3 存储桶之间配置双向 S3 跨区域复制（CRR）。修改应用程序以在
- E：为每个 S3 存储桶启用 S3 版本控制。

**#545｜Web加NoSQL跨区灾备要一分钟内切换** → 三件套记Route 53低TTL故障转移、DynamoDB全球表、跨AZ温备ASG　〔区分词：30〕

- B：使用 Amazon Route 53 故障转移路由策略，从主区域故障转移到灾难恢复区域。将生存时 间 (TTL) 设置为 30 秒。
- C：在 Amazon DynamoDB 中使用全局表，以便在两个选定区域中访问数据。
- E：在多个可用区中使用Auto Scaling组实现Web和应用层的热备份模型。对最少数量的服务器 使用区域保留实例，对任何额外资源使用按需实例。

**#579｜区域服务器全停但Route 53不切另一区** → 两处查Evaluate Target Health、底层加权记录HTTP健康检查

- D：录集的目标健康评估设置未开启。
- E：未为与停止的 Web 服务器关联的一个或多个加权资源记录集设置 HTTP 健康检查

**#674｜双区应用的数据层DynamoDB和Aurora要几分钟恢复** → 两件套记Aurora Global Database加区域、DynamoDB转全球表　〔区分词：DynamoDB、Route 53〕

- A：为 Aurora MySQL 数据库集群添加另一个区域
- D：区域，将现有的 DynamoDB 表转换为全球表使用 Amazon Route 53 应用程序恢复控制器自

### 迁移与混合架构

**#422｜物理虚机迁移要盘点依赖和推荐实例成本** → 三步记装Discovery Agent、Migration Hub分应用组、生成实例及成本建议

- A：机上安装 AWS 应用程序发现代理来评估现有应用程序。
- D：使用 AWS 迁移中心将服务器分组到应用程序中以进行迁移。
- E：使用 AWS 迁移中心生成推荐的实例类型及相关成本。

**#491｜两台VMware应用和SQL Server要少停机搬云** → 两台虚机都持续复制再切换，原SMS应换当前MGN服务核验（待核验）

- A：使用 AWS 服务器迁移服务 (AWS SMS) 复制作业将数据库服务器虚拟机迁移到 AWS。
- D：使用 AWS 服务器迁移服务 (AWS SMS) 复制作业将应用程序服务器虚拟机迁移到 AWS。

**#529｜五百四十个开发账户从旧组织移新组织** → 三步记旧组织移除、新组织邀请、成员接受　〔区分词：RemoveAccountFromOrganization、InviteAccountToOrganization〕

- B：从管理账户中，使用 Organizations API 中的 RemoveAccountFromOrganization 操作将 每个开发者账户从旧组织中移除。
- E：从新的开发者组织的管理账户调用组织 API 中的 InviteAccountToOrganization 操作，向 开发者账户发送邀请。
- F：让每个开发者登录他们的账户并确认加入新的开发者组织。

**#680｜迁移前文档过时又有各种虚机存储数据库** → 三件套记Application Discovery查现状、CART评准备度、Migration Hub汇迁移　〔区分词：CART〕

- A：AWS 应用发现服务
- D：AWS 云采用准备工具 (CART)
- F：AWS 迁移中心
