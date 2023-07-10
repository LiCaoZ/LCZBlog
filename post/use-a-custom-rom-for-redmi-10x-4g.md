# 让 Redmi 10X 4G 吃上类原生 —— ProjectElixir 上手体验指北

在 2022 年 6 月份发布了调得稀烂卡得要死系统 UI 动不动无响应还是 MIUI 12.5 套壳的针对产品代号 `merlin` 的中国大陆版 MIUI V13.0.1.0.SJOCNXM 后，针对此机型的 MIUI 开发似乎进入了停摆状态。

<!--more-->

不过，当初我选择小米的原因之一便是开放——你可以通过官方提供的 Bootloader 解锁工具轻松解除 BL 锁，自由选择你想要的系统。碰巧某天我在搜索关于我机型的 ROM 时找到了 [[ROM][13.0][OFFICIAL] Project Elixir | Redmi Note 9 (Merlinx)](https://forum.xda-developers.com/t/rom-13-0-official-project-elixir-redmi-note-9-merlinx.4487167/) ，体验后发现还不错，所以分享一下（~~顺便给博客扫扫灰啦~~）。

![](/assets/img/Screenshot_20230109-185815.png)

::: tip 提示

以下所有的 Redmi Note9 4G 均为 Redmi 10X 4G 的国际版，即产品代号 `merlinx` 的设备。

:::

## 为什么选择类原生？

这时候就一定有好（事）奇（多）的小伙伴要问了，「~~MIUI 和 iOS 难分秋毫~~，你为什么要选择类原生呢？」这确实是一个好问题。毕竟这件事之前是一个笑话，现在是两个笑话（笑）。

对于我个人而言，选择类原生的原因大概有以下几点：

### 用户存储根目录干净

只要你在刚刷机完成进入系统时就正确配置并开启 [Storage Isolation](https://sr.rikka.app/zh-hans/)，在后续安装应用成功后第一步不是打开应用而是通过存储重定向通知打开隔离，你就可以保持你的用户存储根目录干净到只有 Android 的几个公共文件夹。

这不仅是满足了强迫症的整洁要求，还能在一定程度上防止「坏应用」们共享用户追踪目录对你进行跨应用追踪。

### 免费且没有空间限制的相册云同步

是的，由于 [Google 免费为 Pixel 图片云备份提供无限存储空间](https://support.google.com/photos/answer/6220791)，你可以无限白嫖 Google 云存储原画备份你的图片，并且不会占用你 Google 账户的免费存储空间。

### 全家桶式的 Google 服务

让你用惯了 Google 全家桶服务后，就很难摆脱了……

类原生系统的默认浏览器为 Google Chrome，默认图片查看器为 Google Photos，默认短信应用为 Google 短信，etc。

### 优雅且合理的后台调度

即使我手中 Redmi 10X 4G 的运行内存仅有 4G，依旧不会出现类似于 MIUI 的切出应用就掉后台、一天几十次的系统 UI 无响应、打开 QQ 卡半天等离谱情况，（~~雷军！金凡！！~~）

### 原生设计

真 · Material You

### 简洁

不同于本身系统就很臃肿还再给你塞几十个推广软件的 ADUI，完成开机引导、进入桌面，你会发现 Pixel 那近乎简陋的启动器——Play 商店、Chrome、电话、短信，没了。

当然了，适合自己的才是最好的。比如，中国大陆发行版 UI 可以给你提供类原生无法比拟的本地化体验，等等。到底什么系统适合你，也需要你亲身体验过后才有发言权。

## 备份数据

无论你是否已经解锁，我都强烈建议你备份数据并**在备份完成后检查数据完整性**（一定要检查！我就是这样翻车的！！）。解锁过程与 ROM 刷写都会擦除全部数据。

当你确认你的数据备份完成且通过了完整性校验后，请继续阅读后续内容。

## 解锁 Bootloader

首先，多次点击 设置 - 我的设备 - 全部参数 中的 MIUI 版本，待系统弹窗提示「您已处于开发者模式，无需进行此操作」后，返回设置首页，进入 更多设置 - 开发者选项，找到「设备锁定状态」，点击「绑定账号和设备」。

如果你是首次绑定，则可能需要等待七天。不需要去找动辄上百的奸商买账号，没必要。

下载并解压解锁工具压缩包后，打开 miflash_unlock.exe，根据指引完成操作。

![](/assets/img/Pasted-image-20230109135808.png)

![](/assets/img/Pasted-image-20230109135852.png)

在此之后，设备会自动重启。由于解锁清除了用户数据，这个重启过程可能会比较漫长。

## 刷写底包

这一步不是必须步骤，但我仍然建议你执行此操作。

在 [这里](https://bigota.d.miui.com/V12.5.4.0.RJOCNXM/merlin_images_V12.5.4.0.RJOCNXM_20220118.0000.00_11.0_cn_a10d06e207.tgz) 可以下载到 MIUI 12.5.4.0 版本的线刷包，请把它放到一个方便找的地方。如果不出意外，我们只会用到一次此包；如果出了意外，我们也可以使用此包进行深刷救砖操作。

把它解压到一个文件夹内，在 [这里](https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn) 下载最新版的 Android 调试桥，将里面的文件放在和镜像文件夹平级的位置（如果你已经将相关文件加入到环境变量的文件夹中，可跳过这一步）。

完成后，我们的目录结构应该类似于这样：

```
> dir

Directory of C:\Users\LiCaoZ\Downloads\merlin_images_V12.5.4.0.RJOCNXM_20220118.0000.00_11.0_cn

2022/01/18  21:32    <DIR>          .
2023/01/09  14:11    <DIR>          ..
2022/01/18  21:27    <DIR>          AP
2022/01/18  21:27    <DIR>          BP
2022/01/18  21:27    <DIR>          BP_IN
2022/01/18  21:27             2,783 flash_all.bat
2022/01/18  21:27             3,398 flash_all.sh
2022/01/18  21:27             2,705 flash_all_except_data_storage.bat
2022/01/18  21:27             3,275 flash_all_except_data_storage.sh
2022/01/18  21:27             2,989 flash_all_lock.bat
2022/01/18  21:27             3,587 flash_all_lock.sh
2022/01/18  21:27             5,388 flash_gen_crc_list.py
2022/01/18  21:27             1,282 flash_gen_md5_list.py
2022/01/18  21:27           862,240 flash_gen_resparsecount
2022/01/18  21:27               989 hat_extract.py
2022/01/18  21:27               591 hat_flash.sh
2023/01/09  12:53    <DIR>          images
2022/01/18  21:32             2,085 md5sum.xml
2022/01/18  21:32                79 misc.txt
2008/01/01  00:00         5,992,960 adb.exe
2008/01/01  00:00            97,792 AdbWinApi.dll
2008/01/01  00:00            62,976 AdbWinUsbApi.dll
2008/01/01  00:00           241,664 dmtracedump.exe
2008/01/01  00:00           434,176 etc1tool.exe
2008/01/01  00:00         1,775,104 fastboot.exe
2008/01/01  00:00            44,032 hprof-conv.exe
2008/01/01  00:00           231,594 libwinpthread-1.dll
2008/01/01  00:00           150,528 make_f2fs.exe
2008/01/01  00:00           150,528 make_f2fs_casefold.exe
2008/01/01  00:00             1,157 mke2fs.conf
2008/01/01  00:00           749,568 mke2fs.exe
2008/01/01  00:00         1,073,883 NOTICE.txt
2008/01/01  00:00                38 source.properties
2008/01/01  00:00         1,153,536 sqlite3.exe
......
```

这时，你可以直接双击打开 `flash_all.bat`，开始刷机操作。

![](/assets/img/Pasted-image-20230109143152.png)

如果命令提示符进行到 `fastboot reboot` 阶段或窗口关闭、设备重启，则证明刷机过程已完毕。同时，我建议你备份你的 IMEI 号码，防止由于跨版本降级导致的 IMEI 丢失（我从 Android 13 用 A11 包救砖就把这个鬼搞丢了）。

## 刷入 crDroid Recovery

在 [这里](https://storage.licaoz.com/%E6%90%9E%E6%9C%BA%E8%B5%84%E6%BA%90/merlin/crDroidRecovery.img) 可以下载到 crDroid 适配于此机型的 Recovery。

关机状态下长按 `音量-` 与 `电源` 键，进入 Bootloader。

连接电脑，在电脑中命令行键入 fastboot flash recovery `<crDroidRecovery.img 文件位置>`，例如：`fastboot flash recovery crDroidRecovery.img`。

在返回 Finished 后，输入 `fastboot reboot recovery` 进入 Recovery。

## 刷入 ProjectElixir

ProjectElixir 的官方下载服务在 [这里](https://downloads.projectelixiros.com/thirteen/merlinx/)。由于它在有时速度实在太慢，我在 [这里](https://storage.licaoz.com/%E6%90%9E%E6%9C%BA%E8%B5%84%E6%BA%90/merlin/ProjectElixir_3.4_merlinx-13.0-20221228-1840-OFFICIAL.zip) 托管了最新版的 Zip 文件。其 SHA-256 值为 7f16892d4c5f232be9a4fd6d9d8abf7d9192520e9b01358b0e6574df35b27606，若校验不通过，请不要刷入。

由于 crDroid Recovery 不支持屏幕截图，故下述图片质量可能不佳。

![](/assets/img/CIMG2474.jpg)

进入 Recovery 后，既可以使用传统的音量键调节、电源键确定，也可以直接触屏操作。

我们选择第二项 Apply update - Apply from ADB，就进入了 ADB Sideload 模式

![](/assets/img/CIMG2476.jpg)

连接计算机，键入 adb sideload <文件位置>，就可以开始「线刷」卡刷包啦！

![](/assets/img/CIMG2478.jpg)

成功后，先不要着急点击上方的 Reboot system now，先使用 Factory reset 清除一下数据，否则系统无法正常启动。

## 开机设置

![](/assets/img/Screenshot_20230109-152127.png)

如果你的本地网络无法访问 Google，请在「连接到 WLAN 网络」步骤选择「在离线状态下设置」。

![](/assets/img/NoInternet.png)

在一番设置完成后，你便能体验到最新的类原生 Android 13 系统——并且还通过了 Play 保护机制认证哦。

![](/assets/img/Screenshot_20230109-225603.png)

## 进阶配置

只刷上类原生显然不能满足我们的目标，我们当然还要更进一步玩点别的花样。

### Magisk 获取 ROOT

适用于 3.4 版本 ProjectElixir 的修补后 Boot IMG 我已经放在了[这里](https://storage.licaoz.com/%E6%90%9E%E6%9C%BA%E8%B5%84%E6%BA%90/merlin/magisk_patched-25200_B59D2_PE_3.4.img)，点击就能下载啦。

下载完成后，重新启动至 BootLoader 模式或在关机状态下长按 `音量-` 与 `电源` 组合键，进入 BootLoader，使用 fastboot flash boot magisk_patched-25200_B59D2_PE_3.4.img 即可刷入 Magisk，刷入成功后使用 fastboot reboot 即可进入系统。

------

分类：未分类 | 标签：[技术向](/tags/%E6%8A%80%E6%9C%AF%E5%90%91/)
