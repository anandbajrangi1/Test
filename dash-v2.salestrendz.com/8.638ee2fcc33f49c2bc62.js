(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "5uAm": function(l, n, u) {
            "use strict";
            u.d(n, "a", function() {
                return t
            });
            var e = u("8Y7J");
            u("ZF+8");
            class t {
                constructor(l, n, u, t, i, r) {
                    this.router = l, this.globalService = n, this.authService = u, this.route = t, this.toastr = i, this.invoiceSettingService = r, this.isActive = !1, this.collapsed = !0, this.showMenu = "", this.pushRightClass = "push-right", this.showAdminPanel = !1, this.showAdministrator = !1, this.showControlPanel = !1, this.showSupermanPanel = !1, this.managerMenu = !1, this.salesmanMenu = !1, this.customerMenu = !1, this.supplierMenu = !1, this.labelSetting = {}, this.pageLoader = !1, this.collapsedEvent = new e.EventEmitter, this.collapsedEvent2 = new e.EventEmitter, this.dashboardVisible = !1, this.DMSdashboardVisible = !1, this.DMSmaindashboardVisible = !1, this.supplierDashboardVisible = !1, this.companyListVisible = !1, this.controlpanelVisible = !1, this.customerVisible = !1, this.salesmanVisible = !1, this.suppliersVisbile = !1, this.transactionalVisible = !1, this.reportsVisible = !1, this.accountingDashboardVisible = !1, this.accountingDashboardVisibleForSupplier = !1, this.modulesVisible = !1, this.masterVisible = !1, this.usersManagerVisible = !1, this.usersVisible = !1, this.settingsVisible = !1, this.dmsVisible = !1, this.accountMasterVisible = !1, this.collectionsVisible = !1, this.customerSupplier = !1, this.dropSetting = !1, this.userSetting = !1, this.userSettingAdmin = !1, this.registrationVisible = !1, this.supplierModuleSettings = {
                        Dashboard: !0,
                        Customers: !0,
                        grn: !0,
                        Inventory: !0,
                        Inward_Invoices: !0,
                        Inward_Collection: !0,
                        Inward_Returns: !0,
                        Inward_Orders: !0,
                        Outward_Invoices: !0,
                        Outward_Collections: !0,
                        Outward_Returns: !0,
                        Outward_Orders: !0,
                        Products: !0,
                        Reports: !0,
                        Salesman: !0,
                        DMS_Dashboard: !0
                    }, this.inward = !0, this.ourward = !0, this.router.events.subscribe(l => {
                        this.closeSideMenu()
                    }), this.userRoleMenu(), this.ExpenseinvoiceSettingLabel(), this.subscription = this.invoiceSettingService.platformUpdate.subscribe(l => {
                        "salestrendz" == l && (this.invoiceGenerationPlatform = !0), "salestrendz" !== l && (this.invoiceGenerationPlatform = !1)
                    }, l => {
                        console.log("subscription error is : ", l), this.toastr.error(l)
                    })
                }
                detectSupplierModules() {
                    this.globalService.getSettings().subscribe(l => {
                        l.settings.login_settings.forEach(l => {
                            "Dashboard" === l.menu_name && (this.supplierModuleSettings.Dashboard = l.menu_status), "Customers" === l.menu_name && (this.supplierModuleSettings.Customers = l.menu_status), "GRN" === l.menu_name && (this.supplierModuleSettings.grn = l.menu_status), "Inventory" === l.menu_name && (this.supplierModuleSettings.Inventory = l.menu_status), "Inward Invoices" === l.menu_name && (this.supplierModuleSettings.Inward_Invoices = l.menu_status), "Inward Collection" === l.menu_name && (this.supplierModuleSettings.Inward_Collection = l.menu_status), "Inward Returns" === l.menu_name && (this.supplierModuleSettings.Inward_Returns = l.menu_status), "Inward Orders" === l.menu_name && (this.supplierModuleSettings.Inward_Orders = l.menu_status), "Outward Invoices" === l.menu_name && (this.supplierModuleSettings.Outward_Invoices = l.menu_status), "Outward Collections" === l.menu_name && (this.supplierModuleSettings.Outward_Collections = l.menu_status), "Outward Returns" === l.menu_name && (this.supplierModuleSettings.Outward_Returns = l.menu_status), "Outward Orders" === l.menu_name && (this.supplierModuleSettings.Outward_Orders = l.menu_status), "Products" === l.menu_name && (this.supplierModuleSettings.Products = l.menu_status), "Reports" === l.menu_name && (this.supplierModuleSettings.Reports = l.menu_status), "Salesman" === l.menu_name && (this.supplierModuleSettings.Salesman = l.menu_status), "DMS Dashboard" === l.menu_name && (this.supplierModuleSettings.DMS_Dashboard = l.menu_status)
                        }), setTimeout(() => {
                            this.inward = !!(this.supplierModuleSettings.grn || this.supplierModuleSettings.Inventory || this.supplierModuleSettings.Inward_Invoices || this.supplierModuleSettings.Inward_Collection || this.supplierModuleSettings.Inward_Returns || this.supplierModuleSettings.Inward_Orders), this.ourward = !!(this.supplierModuleSettings.Outward_Invoices || this.supplierModuleSettings.Outward_Collections || this.supplierModuleSettings.Outward_Returns || this.supplierModuleSettings.Inward_Returns || this.supplierModuleSettings.Outward_Orders), console.log("supplierModuleSettings : ", this.supplierModuleSettings)
                        }, 500)
                    }, l => {
                        this.toastr.error(l), console.log("`get` Settings error is : ", l)
                    })
                }
                ngOnInit() {
                    this.getInvoicePlatform(), this.collapsedEvent.emit(this.collapsed), this.routes = this.globalService.getRoutes, console.log("Inside global routes"), console.log("Route", this.routes);
                    let l = JSON.parse(localStorage.getItem("user"));
                    this.labelSetting = l.labelLst, this.identifyRoute(), this.detectSupplierModules(), UIkit.util.on("#offcanvas-nav", "hide", () => {
                        setTimeout(() => {
                            this.identifyRoute()
                        }, 300)
                    })
                }
                ExpenseinvoiceSettingLabel() {
                    "Superman" != JSON.parse(localStorage.getItem("user")).user_type_name && this.globalService.getSettings().subscribe(l => {
                        console.log("ExpenseinvoiceSettingLabel"), localStorage.setItem("invoicingPlatform", l.settings.invoice_generation_platform), this.expense_label = l.settings.expense_label, console.log("Label", this.expense_label)
                    })
                }
                userRoleMenu() {
                    let l = JSON.parse(localStorage.getItem("user"));
                    if (l) switch (l.user_type_name) {
                        case "Superadmin":
                            this.showAdminPanel = !0, this.showSupermanPanel = !0;
                            break;
                        case "Superman":
                            this.showAdministrator = !0;
                            break;
                        case "Control Pannel":
                            this.showControlPanel = !0;
                            break;
                        case "Admin":
                            this.showAdminPanel = !0, this.showSupermanPanel = !0;
                            break;
                        case "Manager":
                            this.managerMenu = !0;
                            break;
                        case "Salesman":
                            this.salesmanMenu = !0;
                            break;
                        case "Supplier":
                            this.supplierMenu = !0;
                            break;
                        case "Customer":
                            this.customerMenu = !0;
                            break;
                        default:
                            return
                    }
                }
                eventCalled() {
                    this.isActive = !this.isActive
                }
                addExpandClass(l) {
                    this.showMenu = l === this.showMenu ? "0" : l
                }
                toggleCollapsed() {}
                leftSidebarcollapse() {}
                isToggled() {
                    return document.querySelector("body").classList.contains(this.pushRightClass)
                }
                toggleSidebar() {
                    document.querySelector("body").classList.toggle(this.pushRightClass)
                }
                onLoggedout() {
                    localStorage.removeItem("isLoggedin")
                }
                ngOnDestroy() {
                    this.routes = ""
                }
                menuSelectSuperAdmin(l) {
                    console.log("selectedMenu : ", l), this.dashboardVisible = "dashboard" === l, this.dashboardVisible = "dashboard-new" === l, this.companyListVisible = "company" === l, this.controlpanelVisible = "controlpanel" === l, this.customerVisible = "customer" === l, this.customerSupplier = "customerSupplier" === l, this.suppliersVisbile = "supplier" === l, this.suppliersVisbile = "supplier-new" === l, this.suppliersVisbile = "suppliers-new" === l, this.transactionalVisible = "transactional" === l, this.modulesVisible = "modules" === l, this.reportsVisible = "reports" === l, this.masterVisible = "masters" === l, this.usersVisible = "users" === l ? this.userSettingAdmin = !0 : this.usersManagerVisible = this.userSettingAdmin = !1, this.settingsVisible = this.dropSetting = "settings" === l, "accountingDashboard" === l ? (this.accountingDashboardVisible = !0, this.supplierDashboardVisible = !1) : (this.accountingDashboardVisible = !1, this.supplierDashboardVisible = !0), this.dmsVisible = "dms" === l, this.salesmanVisible = "supSalesman" === l, "accountingDashboard" === l ? (this.accountingDashboardVisible = this.supplierDashboardVisible = this.accountingDashboardVisibleForSupplier = !0, this.dashboardVisible = !1) : (this.accountingDashboardVisible = this.supplierDashboardVisible = this.accountingDashboardVisibleForSupplier = !1, this.dashboardVisible = !0), this.registrationVisible = "registration" === l, "accountingDashboard" !== l && (this.supplierDashboardVisible = "dashboard-supplier" === l), this.DMSmaindashboardVisible = "dms-dashboard" === l
                }
                menuSelectManager(l) {
                    this.dashboardVisible = "dashboard" === l, this.dashboardVisible = "dashboard-new" === l, this.customerVisible = "customer" === l, this.suppliersVisbile = "supplier" === l, this.transactionalVisible = "transactional" === l, this.modulesVisible = "modules" === l, this.reportsVisible = "reports" === l, this.masterVisible = "masters" === l, this.settingsVisible = this.dropSetting = "settings" === l, this.accountingDashboardVisible = "accountingDashboard" === l, this.dmsVisible = "dms" === l, this.usersManagerVisible = "users" === l ? this.userSetting = !0 : this.usersVisible = this.userSetting = !1, this.usersVisible = !1
                }
                openSidemenu() {
                    this.detectSupplierModules(), setTimeout(() => {
                        UIkit.offcanvas("#offcanvas-nav").show()
                    }, 20)
                }
                identifyRoute() {
                    this.customerVisible = !0, !0 === this.dropSetting ? (this.menuSelectSuperAdmin("settings"), this.menuSelectManager("settings")) : !0 === this.userSetting ? this.menuSelectManager("users") : !0 === this.userSettingAdmin ? this.menuSelectSuperAdmin("users") : (this.menuSelectSuperAdmin(""), this.menuSelectManager(""));
                    let l, n = this.router.routerState.snapshot.url.split("/"),
                        u = n[n.length - 1];
                    l = this.route.snapshot.firstChild.url[0] ? this.route.snapshot.firstChild.url[0].path : "customertypes", !0 === this.dropSetting ? l = "settings" : !0 === this.userSetting ? l = "manager" : !0 === this.userSettingAdmin && (l = "user-creation"), "customers" === l || "customers-new" === l || "supplier-new" === l || "suppliers-new" === l ? (this.customerSupplier = !0, this.customerVisible = !0) : (this.customerSupplier = !1, this.customerVisible = !1), "dashboard-new" === l && "dms" === u ? (this.accountingDashboardVisibleForSupplier = this.dashboardVisible = !1, this.DMSmaindashboardVisible = !0) : this.dashboardVisible = "dashboard" === l || "dashboard-new" === l, this.companyListVisible = "company" === l, this.reportsVisible = "reports" === l, this.suppliersVisbile = "suppliers" === l, this.salesmanVisible = "supSalesman" === l, "admin" === l || "manager" === l || "sub-manager" === l || "salesman" === l || "state" === l ? this.managerMenu ? this.usersManagerVisible = "/manager/manager" === this.router.url || "/manager/salesman" === this.router.url : this.usersVisible = !0 : this.managerMenu ? this.usersManagerVisible = !1 : this.usersVisible = !1, this.accountingDashboardVisible = "orders" === l || "freesample" === l || "invoice" === l, this.modulesVisible = "lead" === l || "target" === l || "flashmsgs" === l || "survey" === l || "feedback" === l || "brochure" === l || "call-log" === l || "custom-forms" === l || "expense" === l || "eod-reports" === l || "collections" === l || "ticket" === l || "deal" === l || "attendance-scheduler" === l || "attendance-scheduler" === l, this.masterVisible = "organizations" === l || "products" === l || "pricelist" === l || "suppliertypes" === l || "activitymasters" === l || "account-masters" === l || "customertypes" === l, this.settingsVisible = "settings" === l || "myaccount" === l || "organisationsettings" === l, "dms" === l || "stock" === l || "GRN" === l || "collection" === l || "invoice" === l || "return" === l ? this.supplierMenu ? (this.accountingDashboardVisible = !0, "dms" !== u && (this.accountingDashboardVisibleForSupplier = !0), this.dmsVisible = !1) : (this.accountingDashboardVisibleForSupplier = !1, this.dmsVisible = !1) : this.supplierMenu ? ("dms" !== u && (this.accountingDashboardVisibleForSupplier = !0), this.dmsVisible = !0) : (this.accountingDashboardVisibleForSupplier = !1, this.dmsVisible = !1), "user-creation" !== l && "/admin/settings/hierarchy/tree" !== this.router.url && "/admin/settings/hierarchy/collapsed" !== this.router.url || (this.usersVisible = !0, this.settingsVisible = !1), "registration" !== l && "registration" !== l || (this.registrationVisible = !0), setTimeout(() => {
                        this.supplierMenu ? ("reports" === l || "products" === l || "suppliers" === l || "customers" === l || "customers-new" === l || "supplier-new" === l || "suppliers-new" === l || "pricelist" === l ? this.accountingDashboardVisibleForSupplier = !1 : "dms" !== u && (this.accountingDashboardVisibleForSupplier = !0), "salesman" === l ? (this.salesmanVisible = !0, this.accountingDashboardVisibleForSupplier = !1) : this.salesmanVisible = !1) : this.salesmanVisible = !1
                    }, 50), setTimeout(() => {
                        console.log(l)
                    }, 2e3)
                }
                openSidebar() {
                    setTimeout(() => {
                        UIkit.offcanvas("#offcanvas-nav").show()
                    }, 100)
                }
                closeSideMenu() {
                    this.pageLoader = !0, setTimeout(() => {
                        UIkit.offcanvas("#offcanvas-nav").hide()
                    }, 100), setTimeout(() => {
                        this.pageLoader = !1, this.identifyRoute()
                    }, 200)
                }
                getInvoicePlatform() {
                    "Superman" != JSON.parse(localStorage.getItem("user")).user_type_name && this.invoiceSettingService.getInvoicePlatform().subscribe(l => {
                        l.settings && "salestrendz" === l.settings.invoice_generation_platform && (this.invoiceGenerationPlatform = !0)
                    })
                }
            }
        },
        Rkfk: function(l, n, u) {
            "use strict";
            var e = u("8Y7J"),
                t = u("SVse"),
                i = u("iInd"),
                r = u("s7LF");
            u("5uAm"), u("6GTT"), u("imvL"), u("EApP"), u("4Htz"), u.d(n, "a", function() {
                return o
            }), u.d(n, "b", function() {
                return dn
            });
            var o = e["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    ['.dashboard-active[_ngcontent-%COMP%]{background-image:url(dashboard-active.4fdc9c94a428f9d25c13.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.dashboard-inactive[_ngcontent-%COMP%]{background-image:url(dashboard-inactive.40018b7b56bf140a724a.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.customer-active[_ngcontent-%COMP%]{background-image:url(customers-active.e3676166aa10615cd824.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.customer-inactive[_ngcontent-%COMP%]{background-image:url(customers-inactive.b71c1edb839172d3f626.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.suppliers-active[_ngcontent-%COMP%], .suppliers-inactive[_ngcontent-%COMP%], .transactional-active[_ngcontent-%COMP%], .transactional-inactive[_ngcontent-%COMP%]{background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.modules-active[_ngcontent-%COMP%]{background-image:url(modules-active.91bbdf1cdb1973d6383b.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.modules-inactive[_ngcontent-%COMP%]{background-image:url(modules-inactive.5c3afd53ad7d27fc9cb7.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.masters-active[_ngcontent-%COMP%]{background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.masters-inactive[_ngcontent-%COMP%]{background-image:url(master-inactive.e51d113cdf5b607e361e.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.users-active[_ngcontent-%COMP%]{background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.users-inactive[_ngcontent-%COMP%]{background-image:url(user-inactive.7c68623e33fdec01b952.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.settings-active[_ngcontent-%COMP%]{background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.settings-inactive[_ngcontent-%COMP%]{background-image:url(settings-inactive.6fd2e0a72cbab49abe79.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.reports-active[_ngcontent-%COMP%]{background-image:url(reports-active.104944f27ff9a68e33c0.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.reports-inactive[_ngcontent-%COMP%]{background-image:url(reports-inactive.5f9096f4383883b7ffec.svg)!important;background-repeat:no-repeat!important;background-position:center!important;margin-right:11px!important}.uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after{content:"";width:1.5em;height:1.5em;float:right;background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23AAAAAA%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E");background-repeat:no-repeat;background-position:50% 50%}.uk-card-primary.uk-card-body[_ngcontent-%COMP%]   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-card-primary[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([class*=uk-card-media])   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-card-secondary.uk-card-body[_ngcontent-%COMP%]   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-card-secondary[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([class*=uk-card-media])   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-light[_ngcontent-%COMP%]   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-offcanvas-bar[_ngcontent-%COMP%]   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-overlay-primary[_ngcontent-%COMP%]   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-section-primary[_ngcontent-%COMP%]:not(.uk-preserve-color)   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-section-secondary[_ngcontent-%COMP%]:not(.uk-preserve-color)   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-tile-primary[_ngcontent-%COMP%]:not(.uk-preserve-color)   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after, .uk-tile-secondary[_ngcontent-%COMP%]:not(.uk-preserve-color)   .uk-nav-parent-icon[_ngcontent-%COMP%] > .uk-parent.uk-open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]::after{background-image:url("data:image/svg+xml;charset=UTF-8,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20fill%3D%22%23AAAAAA%22%20d%3D%22M240.971%20130.524l194.343%20194.343c9.373%209.373%209.373%2024.569%200%2033.941l-22.667%2022.667c-9.357%209.357-24.522%209.375-33.901.04L224%20227.495%2069.255%20381.516c-9.379%209.335-24.544%209.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569%200-33.941L207.03%20130.525c9.372-9.373%2024.568-9.373%2033.941-.001z%22%2F%3E%3C%2Fsvg%3E")}li[_ngcontent-%COMP%]{margin-bottom:18px!important}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}.othersOption[_ngcontent-%COMP%]{bottom:0;position:absolute;margin-bottom:10px}.othersSubmenu[_ngcontent-%COMP%]{background-color:#f1f1f1;position:fixed;opacity:1;padding:15px;width:300px;margin:0 0 0 28px}.uk-nav-header[_ngcontent-%COMP%]{font-size:15px;text-align:left;margin-bottom:20px;margin-top:-13px;margin-right:20px;font-weight:700}.uk-open[_ngcontent-%COMP%] > .uk-offcanvas-bar[_ngcontent-%COMP%]{left:-15px!important;border-left:1px solid #000}.uk-offcanvas-bar[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:-270px;box-sizing:border-box;width:270px;padding:20px;background:#3d3d3d;overflow-y:auto;-webkit-overflow-scrolling:touch}.uk-offcanvas-overlay[_ngcontent-%COMP%]{width:97vw;left:60px;touch-action:none}.uk-offcanvas-close[_ngcontent-%COMP%]{position:absolute;z-index:1000;top:10px;right:5px;padding:5px}#report-bug[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;margin-bottom:20px;font-size:1.2rem}#report-bug[_ngcontent-%COMP%]   .upload_file[_ngcontent-%COMP%]{position:absolute}#report-bug[_ngcontent-%COMP%]   .required_border[_ngcontent-%COMP%]:before{content:"";height:1px;display:inline;width:25px;border-bottom:2px solid #ff6900;position:absolute;bottom:0;left:0}.sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:0;left:280px;width:280px;margin-left:-280px;margin-bottom:0;border:none;overflow-y:auto;background-color:#3d3d3d;bottom:0;overflow-x:hidden;white-space:nowrap;transition:all .2s ease-in-out;padding:10px}.sidebar.collapsed[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px;padding:5px 0;font-size:.875rem;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#3d3d3d;border:0;border-radius:0;color:#999;text-decoration:none;padding:5px 0}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#666}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#3d3d3d}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#303030}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radius:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#3d3d3d;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#303030}.uk-margin[_ngcontent-%COMP%]   .file_upload_modal[_ngcontent-%COMP%]{background-color:initial;cursor:default;padding:initial;border:initial;font-size:.9rem;line-height:16px}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{width:auto;left:280px;position:fixed;cursor:pointer;top:4px;padding:0 1px 1px;background-color:#3d3d3d;color:#fff;border-radius:0 4px 4px 0;opacity:.8;transition:all .2s ease-in-out}.toggle-button.collapsed[_ngcontent-%COMP%]{left:-6px!important;width:auto}.toggle-button.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){display:inline-block}.collapsed[_ngcontent-%COMP%]{width:45px}.collapsed[_ngcontent-%COMP%]   span.dropdown_title[_ngcontent-%COMP%]{display:inline}nav.sidebar.collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:none}nav.sidebar.collapsed[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{display:block;padding-left:0;padding-right:0;text-align:center;margin-top:17px!important}.logo[_ngcontent-%COMP%]{padding:5px 0;margin-bottom:32px;text-align:center}.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.1rem;text-transform:uppercase;color:#fff;margin:0}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .orange-text[_ngcontent-%COMP%]{color:#ff6900}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   sub[_ngcontent-%COMP%]{font-size:.6rem;bottom:0}.others[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;color:#fff;width:100%;text-align:left}.others[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .uk-icon[_ngcontent-%COMP%]{color:#999;font-size:.875rem;margin:0;position:absolute;right:0;top:0}.others[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#999}.others[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{opacity:.6}.others[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus:before, .others[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before{display:none}.footer_bottom_modal[_ngcontent-%COMP%]{border-top:1px solid #e5e5e5}.others[_ngcontent-%COMP%]   .others_dropdown[_ngcontent-%COMP%]{background-color:#f1f1f1;position:fixed;opacity:1;padding:15px;width:300px;margin:0 0 0 28px}.others[_ngcontent-%COMP%]   .others_dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;background:0 0;border:none;font-size:.875rem;padding:5px 0}.outward-transection[_ngcontent-%COMP%]{transform:rotate(180deg)}']
                ],
                data: {}
            });

            function s(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function a(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function c(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 27, "div", [
                    ["class", "list-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/logo.svg"],
                    ["style", "transform: scale(1.4);"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Administrator; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("company") && e), e
                }, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, s)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, a)), e["\u0275did"](7, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](8, 0, null, null, 19, "a", [
                    ["class", "list-group-item othersOption"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 1, "i", [
                    ["uk-tooltip", "title: Others; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/messages-active.png"],
                    ["width", "30px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 16, "div", [
                    ["class", "othersSubmenu"],
                    ["uk-dropdown", "mode: click;; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 15, "ul", [
                    ["class", "uk-nav uk-nav-default text-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 6, "li", [
                    ["uk-toggle", "target: #report-bug"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 5, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 1, "i", [
                    ["style", "color: #999;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](18, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Report a Bug"])), (l()(), e["\u0275eld"](20, 0, null, null, 7, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 6, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 22).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](22, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](23, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](26, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About"]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, !u.companyListVisible), l(n, 7, 0, u.companyListVisible), l(n, 22, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/about"))
                }, function(l, n) {
                    l(n, 21, 0, e["\u0275nov"](n, 22).target, e["\u0275nov"](n, 22).href)
                })
            }

            function d(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function g(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function p(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 27, "div", [
                    ["class", "list-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/logo.svg"],
                    ["style", "transform: scale(1.4);"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Administrator; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("controlpanel") && e), e
                }, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, d)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, g)), e["\u0275did"](7, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](8, 0, null, null, 19, "a", [
                    ["class", "list-group-item othersOption"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 1, "i", [
                    ["uk-tooltip", "title: Others; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/messages-active.png"],
                    ["width", "30px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 16, "div", [
                    ["class", "othersSubmenu"],
                    ["uk-dropdown", "mode: click;; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 15, "ul", [
                    ["class", "uk-nav uk-nav-default text-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 6, "li", [
                    ["uk-toggle", "target: #report-bug"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 5, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 1, "i", [
                    ["style", "color: #999;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](18, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Report a Bug"])), (l()(), e["\u0275eld"](20, 0, null, null, 7, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 6, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 22).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](22, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](23, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](26, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About"]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, !u.companyListVisible), l(n, 7, 0, u.companyListVisible), l(n, 22, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/about"))
                }, function(l, n) {
                    l(n, 21, 0, e["\u0275nov"](n, 22).target, e["\u0275nov"](n, 22).href)
                })
            }

            function m(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dashboard-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function f(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dashboard-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function h(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/customers-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function v(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/customers-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function k(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function b(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function R(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/modules-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function y(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/modules-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function C(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function I(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function w(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/user-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function x(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/user-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function L(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Users; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("users") && e), e
                }, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, w)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, x)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, !u.usersVisible), l(n, 6, 0, u.usersVisible)
                }, null)
            }

            function _(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/user-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function S(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/user-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function M(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Users; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectManager("users") && e), e
                }, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, _)), e["\u0275did"](3, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, S)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, !u.usersVisible), l(n, 5, 0, u.usersVisible)
                }, null)
            }

            function O(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/settings-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function V(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/settings-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function K(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/reports-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function P(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/reports-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function A(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/registration-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function N(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/registration-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function T(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dmsInactive.png"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function D(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dmsActive.png"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function H(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 80, "div", [
                    ["class", "list-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/logo.svg"],
                    ["style", "transform: scale(1.4);"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 6, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Dashboard; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("dashboard") && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, m)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, f)), e["\u0275did"](8, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](9, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Accounts; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("customerSupplier") && e), e
                }, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, h)), e["\u0275did"](12, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, v)), e["\u0275did"](14, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](15, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Accounting Dashboard; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("accountingDashboard") && e), e
                }, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, k)), e["\u0275did"](18, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, b)), e["\u0275did"](20, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](21, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Modules; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("modules") && e), e
                }, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, R)), e["\u0275did"](24, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, y)), e["\u0275did"](26, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](27, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Masters; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("masters") && e), e
                }, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, C)), e["\u0275did"](30, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, I)), e["\u0275did"](32, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, L)), e["\u0275did"](34, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"],
                    ngIfElse: [1, "ngIfElse"]
                }, null), (l()(), e["\u0275and"](0, [
                    ["gotomanagermenu", 2]
                ], null, 0, null, M)), (l()(), e["\u0275eld"](36, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Settings; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("settings") && e), e
                }, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, O)), e["\u0275did"](39, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, V)), e["\u0275did"](41, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](42, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Reports; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (t.menuSelectSuperAdmin("reports"), e = !1 !== t.openSidemenu() && e), e
                }, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, K)), e["\u0275did"](45, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, P)), e["\u0275did"](47, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](48, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Registration; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (t.menuSelectSuperAdmin("registration"), e = !1 !== t.openSidemenu() && e), e
                }, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, A)), e["\u0275did"](51, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, N)), e["\u0275did"](53, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](54, 0, null, null, 6, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: DMS; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 55).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("dms-dashboard") && t), t
                }, null, null)), e["\u0275did"](55, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](56, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, T)), e["\u0275did"](58, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, D)), e["\u0275did"](60, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](61, 0, null, null, 19, "a", [
                    ["class", "list-group-item othersOption"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 1, "i", [
                    ["uk-tooltip", "title: Others; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/messages-active.png"],
                    ["width", "30px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 16, "div", [
                    ["class", "othersSubmenu"],
                    ["uk-dropdown", "mode: click;; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 15, "ul", [
                    ["class", "uk-nav uk-nav-default text-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 6, "li", [
                    ["uk-toggle", "target: #report-bug"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 5, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 1, "i", [
                    ["style", "color: #999;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](71, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Report a Bug"])), (l()(), e["\u0275eld"](73, 0, null, null, 7, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 6, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 75).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](75, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](76, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](79, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About"]))], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/dashboard-new/orders")), l(n, 6, 0, !u.dashboardVisible), l(n, 8, 0, u.dashboardVisible), l(n, 12, 0, !u.customerSupplier), l(n, 14, 0, u.customerSupplier), l(n, 18, 0, !u.accountingDashboardVisible), l(n, 20, 0, u.accountingDashboardVisible), l(n, 24, 0, !u.modulesVisible), l(n, 26, 0, u.modulesVisible), l(n, 30, 0, !u.masterVisible), l(n, 32, 0, u.masterVisible), l(n, 34, 0, !u.managerMenu, e["\u0275nov"](n, 35)), l(n, 39, 0, !u.settingsVisible), l(n, 41, 0, u.settingsVisible), l(n, 45, 0, !u.reportsVisible), l(n, 47, 0, u.reportsVisible), l(n, 51, 0, !u.registrationVisible), l(n, 53, 0, u.registrationVisible), l(n, 55, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/dashboard-new/dms")), l(n, 58, 0, !u.DMSmaindashboardVisible), l(n, 60, 0, u.DMSmaindashboardVisible), l(n, 75, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/about"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href), l(n, 54, 0, e["\u0275nov"](n, 55).target, e["\u0275nov"](n, 55).href), l(n, 74, 0, e["\u0275nov"](n, 75).target, e["\u0275nov"](n, 75).href)
                })
            }

            function W(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/customers-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function E(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/customers-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function z(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function F(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function U(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/modules-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function B(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/modules-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function G(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function q(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function J(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/user-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Y(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/user-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Q(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/reports-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Z(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/reports-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function j(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 57, "div", [
                    ["class", "list-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Accounts; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("customerSupplier") && e), e
                }, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, W)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, E)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](7, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Accounting Dashboard; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("accountingDashboard") && e), e
                }, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, z)), e["\u0275did"](10, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, F)), e["\u0275did"](12, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](13, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Modules; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("modules") && e), e
                }, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, U)), e["\u0275did"](16, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, B)), e["\u0275did"](18, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](19, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Masters; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("masters") && e), e
                }, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, G)), e["\u0275did"](22, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, q)), e["\u0275did"](24, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](25, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Users; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectManager("users") && e), e
                }, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, J)), e["\u0275did"](28, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Y)), e["\u0275did"](30, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](31, 0, null, null, 6, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Reports; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 32).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.closeSideMenu() && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("reports") && t), t
                }, null, null)), e["\u0275did"](32, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](33, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, Q)), e["\u0275did"](35, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Z)), e["\u0275did"](37, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](38, 0, null, null, 19, "a", [
                    ["class", "list-group-item othersOption"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 1, "i", [
                    ["uk-tooltip", "title: Others; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/messages-active.png"],
                    ["width", "30px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 16, "div", [
                    ["class", "othersSubmenu"],
                    ["uk-dropdown", "mode: click;; pos: right;offset: 15"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 15, "ul", [
                    ["class", "uk-nav uk-nav-default text-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 6, "li", [
                    ["uk-toggle", "target: #report-bug"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 5, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 1, "i", [
                    ["style", "color: #999;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](48, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Report a Bug"])), (l()(), e["\u0275eld"](50, 0, null, null, 7, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 6, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 52).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](52, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](53, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 0, "img", [
                    ["height", "15"],
                    ["src", "assets/icons/info.svg"],
                    ["uk-svg", ""],
                    ["width", "15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](56, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize uk-text-emphasis"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About"]))], function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, !u.customerSupplier), l(n, 6, 0, u.customerSupplier), l(n, 10, 0, !u.accountingDashboardVisible), l(n, 12, 0, u.accountingDashboardVisible), l(n, 16, 0, !u.modulesVisible), l(n, 18, 0, u.modulesVisible), l(n, 22, 0, !u.masterVisible), l(n, 24, 0, u.masterVisible), l(n, 28, 0, !u.usersManagerVisible), l(n, 30, 0, u.usersManagerVisible), l(n, 32, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports")), l(n, 35, 0, !u.reportsVisible), l(n, 37, 0, u.reportsVisible), l(n, 52, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/about"))
                }, function(l, n) {
                    l(n, 31, 0, e["\u0275nov"](n, 32).target, e["\u0275nov"](n, 32).href), l(n, 51, 0, e["\u0275nov"](n, 52).target, e["\u0275nov"](n, 52).href)
                })
            }

            function X(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dashboard-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function $(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dashboard-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function ll(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Dashboard; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 1).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("dashboard") && t), t
                }, null, null)), e["\u0275did"](1, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](2, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, X)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, $)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/dashboard-new/orders")), l(n, 4, 0, !u.dashboardVisible), l(n, 6, 0, u.dashboardVisible)
                }, function(l, n) {
                    l(n, 0, 0, e["\u0275nov"](n, 1).target, e["\u0275nov"](n, 1).href)
                })
            }

            function nl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/customers-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function ul(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/customers-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function el(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 9, "a", [
                    ["class", "list-group-item"],
                    ["routerLinkActive", ""],
                    ["uk-tooltip", "title: Customers; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 1).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("customer") && t), t
                }, null, null)), e["\u0275did"](1, 671744, [
                    [2, 4]
                ], 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), e["\u0275did"](2, 1720320, [
                    ["customers", 4]
                ], 2, i.RouterLinkActive, [i.Router, e.ElementRef, e.Renderer2, e.ChangeDetectorRef], {
                    routerLinkActive: [0, "routerLinkActive"]
                }, null), e["\u0275qud"](603979776, 1, {
                    links: 1
                }), e["\u0275qud"](603979776, 2, {
                    linksWithHrefs: 1
                }), (l()(), e["\u0275eld"](5, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, nl)), e["\u0275did"](7, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, ul)), e["\u0275did"](9, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/customers-new")), l(n, 2, 0, ""), l(n, 7, 0, !u.customerVisible), l(n, 9, 0, u.customerVisible)
                }, function(l, n) {
                    l(n, 0, 0, e["\u0275nov"](n, 1).target, e["\u0275nov"](n, 1).href)
                })
            }

            function tl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function il(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function rl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, tl)), e["\u0275did"](2, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, il)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 2, 0, !u.accountingDashboardVisible), l(n, 4, 0, u.accountingDashboardVisible)
                }, null)
            }

            function ol(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "1"],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function sl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "2"],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function al(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "3"],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function cl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, sl)), e["\u0275did"](2, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, al)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 2, 0, !u.accountingDashboardVisibleForSupplier), l(n, 4, 0, u.accountingDashboardVisibleForSupplier)
                }, null)
            }

            function dl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275and"](16777216, null, null, 1, null, cl)), e["\u0275did"](1, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](0, null, null, 0))], function(l, n) {
                    l(n, 1, 0, n.component.supplierMenu)
                }, null)
            }

            function gl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function pl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function ml(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Masters; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("masters") && e), e
                }, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, gl)), e["\u0275did"](3, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, pl)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, !u.masterVisible), l(n, 5, 0, u.masterVisible)
                }, null)
            }

            function fl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function hl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/master-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function vl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Masters; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("masters") && e), e
                }, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, fl)), e["\u0275did"](3, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, hl)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, !u.masterVisible), l(n, 5, 0, u.masterVisible)
                }, null)
            }

            function kl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/reports-inactive.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function bl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/reports-active.svg"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Rl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Reports; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (t.menuSelectSuperAdmin("reports"), e = !1 !== t.openSidemenu() && e), e
                }, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, kl)), e["\u0275did"](3, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, bl)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, !u.reportsVisible), l(n, 5, 0, u.reportsVisible)
                }, null)
            }

            function yl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/inactive-salesman.png"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Cl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/active-salesman.png"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Il(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Salesman; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 1).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("supSalesman") && t), t
                }, null, null)), e["\u0275did"](1, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](2, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, yl)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Cl)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/salesman")), l(n, 4, 0, !u.salesmanVisible), l(n, 6, 0, u.salesmanVisible)
                }, function(l, n) {
                    l(n, 0, 0, e["\u0275nov"](n, 1).target, e["\u0275nov"](n, 1).href)
                })
            }

            function wl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dmsInactive.png"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function xl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "30px"],
                    ["src", "assets/icons/menu/dmsActive.png"],
                    ["width", "30px"]
                ], null, null, null, null, null))], null, null)
            }

            function Ll(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: DMS; pos: right;offset: 15"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 1).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), "click" === n && (t = !1 !== i.menuSelectSuperAdmin("dms-dashboard") && t), t
                }, null, null)), e["\u0275did"](1, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](2, 0, null, null, 4, "i", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, wl)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, xl)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/dashboard-new/dms")), l(n, 4, 0, !u.DMSmaindashboardVisible), l(n, 6, 0, u.DMSmaindashboardVisible)
                }, function(l, n) {
                    l(n, 0, 0, e["\u0275nov"](n, 1).target, e["\u0275nov"](n, 1).href)
                })
            }

            function _l(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 21, "div", [
                    ["class", "list-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/logo.svg"],
                    ["style", "transform: scale(1.4);"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, ll)), e["\u0275did"](3, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, el)), e["\u0275did"](5, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 5, "a", [
                    ["class", "list-group-item"],
                    ["uk-tooltip", "title: Accounting Dashboard; pos: right;offset: 15"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (e = !1 !== t.openSidemenu() && e), "click" === n && (e = !1 !== t.menuSelectSuperAdmin("accountingDashboard") && e), e
                }, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, rl)), e["\u0275did"](8, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, ol)), e["\u0275did"](10, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"],
                    ngIfElse: [1, "ngIfElse"]
                }, null), (l()(), e["\u0275and"](0, [
                    ["dashboardInvisible", 2]
                ], null, 0, null, dl)), (l()(), e["\u0275and"](16777216, null, null, 1, null, ml)), e["\u0275did"](13, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, vl)), e["\u0275did"](15, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Rl)), e["\u0275did"](17, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Il)), e["\u0275did"](19, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Ll)), e["\u0275did"](21, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, u.supplierModuleSettings.Dashboard), l(n, 5, 0, u.supplierModuleSettings.Customers), l(n, 8, 0, !u.supplierMenu), l(n, 10, 0, !0 === u.dashboardVisible, e["\u0275nov"](n, 11)), l(n, 13, 0, !0 === u.supplierMenu && !0 === u.supplierModuleSettings.Products), l(n, 15, 0, !1 === u.supplierMenu), l(n, 17, 0, u.supplierModuleSettings.Reports), l(n, 19, 0, u.supplierModuleSettings.Salesman), l(n, 21, 0, u.supplierModuleSettings.DMS_Dashboard)
                }, null)
            }

            function Sl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 8, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dashboard"])), (l()(), e["\u0275eld"](3, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/order.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Orders "]))], function(l, n) {
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dashboard-new/orders"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href)
                })
            }

            function Ml(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 33, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Administrator"])), (l()(), e["\u0275eld"](3, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Company List"])), (l()(), e["\u0275eld"](8, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 10).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](10, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](11, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Partners"])), (l()(), e["\u0275eld"](13, 0, null, null, 15, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "admin_users"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 14, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 2, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Analytics "])), (l()(), e["\u0275eld"](18, 0, null, null, 10, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "productMaster"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 21).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](21, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](22, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Comparison "])), (l()(), e["\u0275eld"](24, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 26).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](26, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](27, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Userlist "])), (l()(), e["\u0275eld"](29, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 31).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](31, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](32, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customform "]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/company")), l(n, 10, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/partners")), l(n, 21, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/analytics")), l(n, 26, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/analytics/analytics-userlist")), l(n, 31, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/customform"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 9, 0, e["\u0275nov"](n, 10).target, e["\u0275nov"](n, 10).href), l(n, 20, 0, e["\u0275nov"](n, 21).target, e["\u0275nov"](n, 21).href), l(n, 25, 0, e["\u0275nov"](n, 26).target, e["\u0275nov"](n, 26).href), l(n, 30, 0, e["\u0275nov"](n, 31).target, e["\u0275nov"](n, 31).href)
                })
            }

            function Ol(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 43, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Administrator"])), (l()(), e["\u0275eld"](3, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Company List"])), (l()(), e["\u0275eld"](8, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 10).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](10, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](11, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Admin Users"])), (l()(), e["\u0275eld"](13, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 15).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](15, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](16, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Partners"])), (l()(), e["\u0275eld"](18, 0, null, null, 15, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "admin_users"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 14, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 2, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Analytics "])), (l()(), e["\u0275eld"](23, 0, null, null, 10, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "productMaster"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 26).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](26, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](27, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Comparison "])), (l()(), e["\u0275eld"](29, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 31).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](31, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](32, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Userlist "])), (l()(), e["\u0275eld"](34, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 36).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](36, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](37, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customform "])), (l()(), e["\u0275eld"](39, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 41).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](41, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](42, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"],
                    ["uk-icon", "icon: list"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customform "]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/company")), l(n, 10, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/admin-users")), l(n, 15, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/partners")), l(n, 26, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/analytics")), l(n, 31, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/analytics/analytics-userlist")), l(n, 36, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/customform")), l(n, 41, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/customform"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 9, 0, e["\u0275nov"](n, 10).target, e["\u0275nov"](n, 10).href), l(n, 14, 0, e["\u0275nov"](n, 15).target, e["\u0275nov"](n, 15).href), l(n, 25, 0, e["\u0275nov"](n, 26).target, e["\u0275nov"](n, 26).href), l(n, 30, 0, e["\u0275nov"](n, 31).target, e["\u0275nov"](n, 31).href), l(n, 35, 0, e["\u0275nov"](n, 36).target, e["\u0275nov"](n, 36).href), l(n, 40, 0, e["\u0275nov"](n, 41).target, e["\u0275nov"](n, 41).href)
                })
            }

            function Vl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 14, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Users"])), (l()(), e["\u0275eld"](3, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/users/manager.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Manager"])), (l()(), e["\u0275eld"](9, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 11).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](11, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](12, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/users/salesman.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Salesman"]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/manager")), l(n, 11, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/salesman"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 10, 0, e["\u0275nov"](n, 11).target, e["\u0275nov"](n, 11).href)
                })
            }

            function Kl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 32, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Reports"])), (l()(), e["\u0275eld"](3, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/Report/User_Based_Report_1.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" User Based Report"])), (l()(), e["\u0275eld"](8, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 10).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](10, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](11, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/Report/Customer_Based_Report_1.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customer Based Report"])), (l()(), e["\u0275eld"](13, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 15).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](15, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](16, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/Report/Order_based_report_1.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Order Based Report"])), (l()(), e["\u0275eld"](18, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 20).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](20, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](21, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/Report/Product_based_report_1.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Product Based Report"])), (l()(), e["\u0275eld"](23, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 25).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](25, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](26, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/Report/Comment_based_report_1.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Comment Based Report"])), (l()(), e["\u0275eld"](28, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 30).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](30, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](31, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/Report/Diversion_1.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Diversion Based Report"]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports/salesmanbased/attendance")), l(n, 10, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports/details/customerbased")), l(n, 15, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports/details/order-based")), l(n, 20, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports/product_based/stock")), l(n, 25, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports/comment_based/comment-report")), l(n, 30, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/reports/diversion-based/diversion-report"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 9, 0, e["\u0275nov"](n, 10).target, e["\u0275nov"](n, 10).href), l(n, 14, 0, e["\u0275nov"](n, 15).target, e["\u0275nov"](n, 15).href), l(n, 19, 0, e["\u0275nov"](n, 20).target, e["\u0275nov"](n, 20).href), l(n, 24, 0, e["\u0275nov"](n, 25).target, e["\u0275nov"](n, 25).href), l(n, 29, 0, e["\u0275nov"](n, 30).target, e["\u0275nov"](n, 30).href)
                })
            }

            function Pl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 12, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Accounts"])), (l()(), e["\u0275eld"](3, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/customers-inactive.svg"],
                    ["style", "margin-right: 0.5rem;"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customer "])), (l()(), e["\u0275eld"](8, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 10).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](10, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](11, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/user-inactive.svg"],
                    ["style", "margin-right: 0.5rem;"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Supplier "]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/customers-new")), l(n, 10, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/suppliers-new"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 9, 0, e["\u0275nov"](n, 10).target, e["\u0275nov"](n, 10).href)
                })
            }

            function Al(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 12, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registration"])), (l()(), e["\u0275eld"](3, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/customers-inactive.svg"],
                    ["style", "margin-right: 0.5rem;"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Consumer"])), (l()(), e["\u0275eld"](8, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 10).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](10, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](11, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/user-inactive.svg"],
                    ["style", "margin-right: 0.5rem;"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Supplier"]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/registration/consumer")), l(n, 10, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/registration/supplier"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 9, 0, e["\u0275nov"](n, 10).target, e["\u0275nov"](n, 10).href)
                })
            }

            function Nl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 8, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dashboard"])), (l()(), e["\u0275eld"](3, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/order.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Orders "]))], function(l, n) {
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dashboard-new/orders"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href)
                })
            }

            function Tl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "li", [
                    ["class", "accounting-transection"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "20px"],
                    ["src", "assets/icons/menu/inward_transection.png"],
                    ["width", "20px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0\xa0\xa0Inward Transaction "]))], null, null)
            }

            function Dl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" GRN\xa0\xa0 "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/inward/GRN"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Hl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Invoice\xa0\xa0 "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/invoice/inward/info"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Wl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/collection.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Collection "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/collections/inward/list"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function El(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Return "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/return/inward/info"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function zl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/order.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Orders "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/orders/inward/info"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Fl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Inventory\xa0\xa0 "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/stocks"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Ul(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "li", [
                    ["class", "accounting-transection"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "outward-transection"],
                    ["height", "20px"],
                    ["src", "assets/icons/menu/inward_transection.png"],
                    ["width", "20px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0\xa0\xa0Outward Transaction "]))], null, null)
            }

            function Bl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Invoice\xa0\xa0 "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/invoice/outward/info"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Gl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Collection "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/collections/outward/list"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function ql(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Return "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/outward/return/info"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Jl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/order.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Orders\xa0\xa0 "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/orders/outward/info"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Yl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 26, "ul", [
                    ["class", "uk-nav uk-nav-default uk"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", " uk-nav-header"],
                    ["style", "font-size: 14px; margin-right: 10px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Accounting Dashboard "])), (l()(), e["\u0275and"](16777216, null, null, 1, null, Tl)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Dl)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Hl)), e["\u0275did"](8, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Wl)), e["\u0275did"](10, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, El)), e["\u0275did"](12, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, zl)), e["\u0275did"](14, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Fl)), e["\u0275did"](16, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Ul)), e["\u0275did"](18, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Bl)), e["\u0275did"](20, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Gl)), e["\u0275did"](22, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, ql)), e["\u0275did"](24, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Jl)), e["\u0275did"](26, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, u.inward), l(n, 6, 0, u.supplierModuleSettings.grn), l(n, 8, 0, u.supplierModuleSettings.Inward_Invoices), l(n, 10, 0, u.supplierModuleSettings.Inward_Collection), l(n, 12, 0, u.supplierModuleSettings.Inward_Returns), l(n, 14, 0, u.supplierModuleSettings.Inward_Orders), l(n, 16, 0, u.supplierModuleSettings.Inventory), l(n, 18, 0, u.ourward), l(n, 20, 0, u.supplierModuleSettings.Outward_Invoices), l(n, 22, 0, u.supplierModuleSettings.Outward_Collections), l(n, 24, 0, u.supplierModuleSettings.Outward_Returns), l(n, 26, 0, u.supplierModuleSettings.Outward_Orders)
                }, null)
            }

            function Ql(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 2).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](2, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](3, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Invoice "]))], function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/invoice"))
                }, function(l, n) {
                    l(n, 1, 0, e["\u0275nov"](n, 2).target, e["\u0275nov"](n, 2).href)
                })
            }

            function Zl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0\xa0\xa0GRN"]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/GRN"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function jl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/invoice.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0\xa0\xa0Return"]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/return"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function Xl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/stock.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0\xa0\xa0Stock "]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/dms/stock"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function $l(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 22, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"],
                    ["style", "font-size: 14px; margin-right: 10px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Accounting Dashboard "])), (l()(), e["\u0275and"](16777216, null, null, 1, null, Ql)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](5, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 7).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](7, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](8, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 0, "img", [
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/accounting/order.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Orders "])), (l()(), e["\u0275eld"](11, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 13).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](13, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](14, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/collection.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Collections"])), (l()(), e["\u0275and"](16777216, null, null, 1, null, Zl)), e["\u0275did"](18, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, jl)), e["\u0275did"](20, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Xl)), e["\u0275did"](22, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, u.invoiceGenerationPlatform), l(n, 7, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/orders")), l(n, 13, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/collections")), l(n, 18, 0, !u.managerMenu), l(n, 20, 0, !u.managerMenu), l(n, 22, 0, !u.managerMenu)
                }, function(l, n) {
                    l(n, 6, 0, e["\u0275nov"](n, 7).target, e["\u0275nov"](n, 7).href), l(n, 12, 0, e["\u0275nov"](n, 13).target, e["\u0275nov"](n, 13).href)
                })
            }

            function ln(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/lead.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Leads "]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/lead"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function nn(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/deal.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Deals "]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/deal"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function un(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/live_pictures.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Live Images "]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/live-images"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function en(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/attendance_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Attendance "]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/attendance-scheduler"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function tn(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 3).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](3, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/scheme-icon.png"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Schemes "]))], function(l, n) {
                    l(n, 3, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/schemes"))
                }, function(l, n) {
                    l(n, 2, 0, e["\u0275nov"](n, 3).target, e["\u0275nov"](n, 3).href)
                })
            }

            function rn(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 60, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Modules"])), (l()(), e["\u0275and"](16777216, null, null, 1, null, ln)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, nn)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](7, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 9).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](9, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](10, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/target.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Targets "])), (l()(), e["\u0275eld"](13, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 15).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](15, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](16, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/Flash_message.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Flash Messages "])), (l()(), e["\u0275eld"](19, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 21).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](21, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](22, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/survey.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Survey "])), (l()(), e["\u0275eld"](25, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 27).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](27, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](28, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/feedback.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Feedback "])), (l()(), e["\u0275eld"](31, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 33).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](33, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](34, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/brochure.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Brochure "])), (l()(), e["\u0275eld"](37, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](38, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 39).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](39, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](40, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/Custom_Form.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Custom Forms "])), (l()(), e["\u0275eld"](43, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 45).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](45, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](46, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/expense.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](48, null, [" ", " "])), (l()(), e["\u0275eld"](49, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 51).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](51, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](52, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/reports-inactive.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" EOD Reports "])), (l()(), e["\u0275and"](16777216, null, null, 1, null, un)), e["\u0275did"](56, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, en)), e["\u0275did"](58, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, tn)), e["\u0275did"](60, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, !u.managerMenu), l(n, 6, 0, !u.managerMenu), l(n, 9, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/target")), l(n, 15, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/flashmsgs")), l(n, 21, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/survey")), l(n, 27, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/feedback")), l(n, 33, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/brochure")), l(n, 39, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/custom-forms")), l(n, 45, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/expense")), l(n, 51, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/eod-reports")), l(n, 56, 0, !u.managerMenu), l(n, 58, 0, !u.managerMenu), l(n, 60, 0, !u.managerMenu)
                }, function(l, n) {
                    var u = n.component;
                    l(n, 8, 0, e["\u0275nov"](n, 9).target, e["\u0275nov"](n, 9).href), l(n, 14, 0, e["\u0275nov"](n, 15).target, e["\u0275nov"](n, 15).href), l(n, 20, 0, e["\u0275nov"](n, 21).target, e["\u0275nov"](n, 21).href), l(n, 26, 0, e["\u0275nov"](n, 27).target, e["\u0275nov"](n, 27).href), l(n, 32, 0, e["\u0275nov"](n, 33).target, e["\u0275nov"](n, 33).href), l(n, 38, 0, e["\u0275nov"](n, 39).target, e["\u0275nov"](n, 39).href), l(n, 44, 0, e["\u0275nov"](n, 45).target, e["\u0275nov"](n, 45).href), l(n, 48, 0, u.expense_label), l(n, 50, 0, e["\u0275nov"](n, 51).target, e["\u0275nov"](n, 51).href)
                })
            }

            function on(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 8, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Masters"])), (l()(), e["\u0275eld"](3, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/products.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Products"]))], function(l, n) {
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", n.component.routes, "/products/products"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href)
                })
            }

            function sn(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 44, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Masters"])), (l()(), e["\u0275eld"](3, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/organisation.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Organisation"])), (l()(), e["\u0275eld"](9, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 11).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](11, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](12, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/products.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Products"])), (l()(), e["\u0275eld"](15, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 17).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](17, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](18, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/price_list.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Price Lists"])), (l()(), e["\u0275eld"](21, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 23).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](23, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](24, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/customer_type.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Customer Types"])), (l()(), e["\u0275eld"](27, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 29).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](29, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](30, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/supplier_type.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Supplier Types"])), (l()(), e["\u0275eld"](33, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 35).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](35, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](36, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/masters/activity_master.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Activity Master"])), (l()(), e["\u0275eld"](39, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 41).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](41, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](42, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/modules/AccountMaster.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Account Master"]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/organizations")), l(n, 11, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/products/products")), l(n, 17, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "//pricelist/info")), l(n, 23, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/customertypes")), l(n, 29, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/suppliertypes")), l(n, 35, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/activitymasters/info")), l(n, 41, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/account-masters"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 10, 0, e["\u0275nov"](n, 11).target, e["\u0275nov"](n, 11).href), l(n, 16, 0, e["\u0275nov"](n, 17).target, e["\u0275nov"](n, 17).href), l(n, 22, 0, e["\u0275nov"](n, 23).target, e["\u0275nov"](n, 23).href), l(n, 28, 0, e["\u0275nov"](n, 29).target, e["\u0275nov"](n, 29).href), l(n, 34, 0, e["\u0275nov"](n, 35).target, e["\u0275nov"](n, 35).href), l(n, 40, 0, e["\u0275nov"](n, 41).target, e["\u0275nov"](n, 41).href)
                })
            }

            function an(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 33, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Users"])), (l()(), e["\u0275eld"](3, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 5).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](5, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/users/admin.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" User"])), (l()(), e["\u0275eld"](9, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 11).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](11, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](12, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/users/route.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Routes"])), (l()(), e["\u0275eld"](15, 0, null, null, 18, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "companyHeirarchy"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 17, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/company_hierarchy.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Company Hierarchy "])), (l()(), e["\u0275eld"](21, 0, null, null, 12, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "productMaster"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 24).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](24, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](25, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/tree_view.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tree View "])), (l()(), e["\u0275eld"](28, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 30).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](30, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](31, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/collapsed_view.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Collapsed View "]))], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/user-creation")), l(n, 11, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/state")), l(n, 24, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/hierarchy/tree")), l(n, 30, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/hierarchy/collapsed"))
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 5).target, e["\u0275nov"](n, 5).href), l(n, 10, 0, e["\u0275nov"](n, 11).target, e["\u0275nov"](n, 11).href), l(n, 23, 0, e["\u0275nov"](n, 24).target, e["\u0275nov"](n, 24).href), l(n, 29, 0, e["\u0275nov"](n, 30).target, e["\u0275nov"](n, 30).href)
                })
            }

            function cn(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 144, "ul", [
                    ["class", "uk-nav uk-nav-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "li", [
                    ["class", "uk-nav-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Settings"])), (l()(), e["\u0275eld"](3, 0, null, null, 43, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "moduleSettings"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 42, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/module_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Module Settings "])), (l()(), e["\u0275eld"](9, 0, null, null, 37, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "moduleSettingElements"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 12).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](12, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](13, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/feedback_setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Feedback Settings"])), (l()(), e["\u0275eld"](16, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 18).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](18, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](19, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/expense_setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](21, null, [" ", " Settings"])), (l()(), e["\u0275eld"](22, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 24).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](24, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](25, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/EOD_Setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" EOD Settings"])), (l()(), e["\u0275eld"](28, 0, null, null, 18, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "dealsSettings"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 17, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/DealSetting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Deals Settings "])), (l()(), e["\u0275eld"](34, 0, null, null, 12, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "dealsMaster"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 37).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](37, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](38, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/expense_setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Deals Master "])), (l()(), e["\u0275eld"](41, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 43).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](43, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](44, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/expense_setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Deals pipeline "])), (l()(), e["\u0275eld"](47, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 49).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](49, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](50, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/attendance_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Attendance Settings "])), (l()(), e["\u0275eld"](53, 0, null, null, 5, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 55).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](55, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](56, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/product_master_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Product Master Settings "])), (l()(), e["\u0275eld"](59, 0, null, null, 18, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "stockSettingIdentity"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 17, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/Stock_Setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stock Settings "])), (l()(), e["\u0275eld"](65, 0, null, null, 12, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "productMaster"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 68).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](68, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](69, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/tree_view.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["General Setting"])), (l()(), e["\u0275eld"](72, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 74).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](74, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](75, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/collapsed_view.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Product Quantity"])), (l()(), e["\u0275eld"](78, 0, null, null, 5, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 80).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](80, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](81, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/accounting_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Accounting Settings "])), (l()(), e["\u0275eld"](84, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 86).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](86, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](87, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/customer_supplier_mapping.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customer Supplier Mapping "])), (l()(), e["\u0275eld"](90, 0, null, null, 18, "ul", [
                    ["class", "uk-nav-default uk-nav-parent-icon"],
                    ["id", "leadsSettings"],
                    ["uk-nav", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 17, "li", [
                    ["class", "uk-parent"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/leads_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Leads Settings "])), (l()(), e["\u0275eld"](96, 0, null, null, 12, "ul", [
                    ["class", "uk-nav-sub"],
                    ["id", "leadsMaster"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 99).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](99, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](100, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/expense_setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Leads Master "])), (l()(), e["\u0275eld"](103, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 105).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](105, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](106, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/expense_setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 0, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Leads Stages "])), (l()(), e["\u0275eld"](109, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 111).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](111, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](112, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](113, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/tally_integration.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tally Integration "])), (l()(), e["\u0275eld"](115, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](116, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 117).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](117, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](118, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/notification_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Notification Settings "])), (l()(), e["\u0275eld"](121, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 123).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](123, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](124, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](125, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/attendance_settings.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Website Settings "])), (l()(), e["\u0275eld"](127, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 129).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](129, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](130, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/submenu/setting/Stock_Setting.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Customer Settings "])), (l()(), e["\u0275eld"](133, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 135).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](135, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](136, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](137, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/settings/live-tracking.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Livetracking Settings "])), (l()(), e["\u0275eld"](139, 0, null, null, 5, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](140, 0, null, null, 4, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var t = !0;
                    return "click" === n && (t = !1 !== e["\u0275nov"](l, 141).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && t), t
                }, null, null)), e["\u0275did"](141, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, t.LocationStrategy], {
                    routerLink: [0, "routerLink"]
                }, null), (l()(), e["\u0275eld"](142, 0, null, null, 1, "span", [
                    ["class", "uk-margin-small-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](143, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["height", "25px"],
                    ["src", "assets/icons/menu/users-cog.svg"],
                    ["width", "25px"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Supplier Settings "]))], function(l, n) {
                    var u = n.component;
                    l(n, 12, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/feedback-settings")), l(n, 18, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/expense-settings")), l(n, 24, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/eod-settings")), l(n, 37, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/deal-settings")), l(n, 43, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/deal/pipeline")), l(n, 49, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/attendance-settings")), l(n, 55, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/product-master-settings")), l(n, 68, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/stock-settings/general-setting")), l(n, 74, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/stock-settings/product-quantity")), l(n, 80, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/accounting-settings")), l(n, 86, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/customer-supplier-mapping")), l(n, 99, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/lead-settings")), l(n, 105, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/lead-master/lead-stages")), l(n, 111, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/integrations/tally")), l(n, 117, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/myaccount/notification/checkInOut")), l(n, 123, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/website-settings")), l(n, 129, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/customer-settings")), l(n, 135, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/livetracking-settings")), l(n, 141, 0, e["\u0275inlineInterpolate"](1, "/", u.routes, "/settings/supplier-settings"))
                }, function(l, n) {
                    var u = n.component;
                    l(n, 11, 0, e["\u0275nov"](n, 12).target, e["\u0275nov"](n, 12).href), l(n, 17, 0, e["\u0275nov"](n, 18).target, e["\u0275nov"](n, 18).href), l(n, 21, 0, u.expense_label), l(n, 23, 0, e["\u0275nov"](n, 24).target, e["\u0275nov"](n, 24).href), l(n, 36, 0, e["\u0275nov"](n, 37).target, e["\u0275nov"](n, 37).href), l(n, 42, 0, e["\u0275nov"](n, 43).target, e["\u0275nov"](n, 43).href), l(n, 48, 0, e["\u0275nov"](n, 49).target, e["\u0275nov"](n, 49).href), l(n, 54, 0, e["\u0275nov"](n, 55).target, e["\u0275nov"](n, 55).href), l(n, 67, 0, e["\u0275nov"](n, 68).target, e["\u0275nov"](n, 68).href), l(n, 73, 0, e["\u0275nov"](n, 74).target, e["\u0275nov"](n, 74).href), l(n, 79, 0, e["\u0275nov"](n, 80).target, e["\u0275nov"](n, 80).href), l(n, 85, 0, e["\u0275nov"](n, 86).target, e["\u0275nov"](n, 86).href), l(n, 98, 0, e["\u0275nov"](n, 99).target, e["\u0275nov"](n, 99).href), l(n, 104, 0, e["\u0275nov"](n, 105).target, e["\u0275nov"](n, 105).href), l(n, 110, 0, e["\u0275nov"](n, 111).target, e["\u0275nov"](n, 111).href), l(n, 116, 0, e["\u0275nov"](n, 117).target, e["\u0275nov"](n, 117).href), l(n, 122, 0, e["\u0275nov"](n, 123).target, e["\u0275nov"](n, 123).href), l(n, 128, 0, e["\u0275nov"](n, 129).target, e["\u0275nov"](n, 129).href), l(n, 134, 0, e["\u0275nov"](n, 135).target, e["\u0275nov"](n, 135).href), l(n, 140, 0, e["\u0275nov"](n, 141).target, e["\u0275nov"](n, 141).href)
                })
            }

            function dn(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 16, "nav", [
                    ["class", "sidebar"]
                ], null, null, null, null, null)), e["\u0275did"](1, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    collapsed: 0
                }), (l()(), e["\u0275and"](16777216, null, null, 1, null, c)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, p)), e["\u0275did"](6, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, H)), e["\u0275did"](8, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, j)), e["\u0275did"](10, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, _l)), e["\u0275did"](12, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](13, 0, null, null, 3, "div", [
                    ["class", "toggle-button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (t.identifyRoute(), e = !1 !== t.openSidemenu() && e), e
                }, null, null)), e["\u0275did"](14, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](15, {
                    collapsed: 0
                }), (l()(), e["\u0275eld"](16, 0, null, null, 0, "span", [
                    ["uk-icon", "icon: menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 32, "div", [
                    ["class", "uk-animation-fade uk-animation-fast"],
                    ["id", "offcanvas-nav"],
                    ["uk-offcanvas", "overlay: true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 31, "div", [
                    ["class", "uk-offcanvas-bar  "]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 0, "button", [
                    ["class", "uk-offcanvas-close"],
                    ["type", "button"],
                    ["uk-close", ""]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        t = l.component;
                    return "click" === n && (t.dropSetting = !1, t.userSetting = !1, e = 0 != (t.userSettingAdmin = !1) && e), e
                }, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, Sl)), e["\u0275did"](21, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Ml)), e["\u0275did"](23, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Ol)), e["\u0275did"](25, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Vl)), e["\u0275did"](27, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Kl)), e["\u0275did"](29, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Pl)), e["\u0275did"](31, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Al)), e["\u0275did"](33, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Nl)), e["\u0275did"](35, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, Yl)), e["\u0275did"](37, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, $l)), e["\u0275did"](39, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, rn)), e["\u0275did"](41, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, on)), e["\u0275did"](43, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, sn)), e["\u0275did"](45, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, an)), e["\u0275did"](47, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, cn)), e["\u0275did"](49, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](50, 0, null, null, 3, "div", [
                    ["class", "spinner_main"]
                ], [
                    [2, "active_loader", null]
                ], null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 2, "div", [
                    ["class", "custom_spinner"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 0, "div", [
                    ["class", "double-bounce1"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 0, "div", [
                    ["class", "double-bounce2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 69, "div", [
                    ["id", "report-bug"],
                    ["uk-modal", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 68, "div", [
                    ["class", "uk-modal-dialog uk-modal-body uk-padding-small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 0, "button", [
                    ["class", "uk-modal-close-default"],
                    ["type", "button"],
                    ["uk-close", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 1, "h2", [
                    ["class", "uk-modal-title uk-modal-title size1 font-bold uk-text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Report Bug"])), (l()(), e["\u0275eld"](59, 0, null, null, 61, "div", [
                    ["class", "uk-modal-body uk-padding-remove uk-overflow-auto scroll_feedback"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 60, "form", [
                    ["action", ""],
                    ["class", "uk-form-horizontal uk-width-1-1 ow2-form uk-margin-small-right"],
                    ["id", "form-new-customer-collection"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(l, n, u) {
                    var t = !0;
                    return "submit" === n && (t = !1 !== e["\u0275nov"](l, 62).onSubmit(u) && t), "reset" === n && (t = !1 !== e["\u0275nov"](l, 62).onReset() && t), t
                }, null, null)), e["\u0275did"](61, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), e["\u0275did"](62, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), e["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), e["\u0275did"](64, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (l()(), e["\u0275eld"](65, 0, null, null, 5, "div", [
                    ["class", "uk-width-1-1 uk-flex uk-flex-middle ow2-form-row uk-position-relative uk-margin-small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 2, "label", [
                    ["class", "uk-form-label uk-text-uppercase"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["SUMMARY"])), (l()(), e["\u0275eld"](68, 0, null, null, 0, "span", [
                    ["class", "required"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 1, "div", [
                    ["class", "uk-form-controls uk-width-expand uk-margin-remove ow2-form-input-row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 0, "textarea", [
                    ["class", "uk-textarea ow2-textarea size2"],
                    ["id", "fdbk_comments"],
                    ["name", "fdbk_comments"],
                    ["placeholder", "Start typing..."],
                    ["rows", "3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 21, "div", [
                    ["class", "uk-width-1-1 uk-flex uk-flex-middle ow2-form-row uk-position-relative uk-margin-small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 3, "div", [
                    ["class", "uk-width-small uk-margin-remove ow2-form-input-label required"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize"],
                    ["text", "Type"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["type"])), (l()(), e["\u0275eld"](75, 0, null, null, 0, "span", [
                    ["class", "required"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 16, "div", [
                    ["class", "uk-form-controls uk-width-expand uk-margin-remove ow2-form-input-row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 15, "select", [
                    ["class", "uk-select ow2-select size2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 2, "option", [
                    ["value", "? undefined:undefined ?"]
                ], null, null, null, null, null)), e["\u0275did"](79, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](80, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275eld"](81, 0, null, null, 3, "option", [
                    ["value", "bug"]
                ], null, null, null, null, null)), e["\u0275did"](82, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](83, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275ted"](-1, null, ["Bug"])), (l()(), e["\u0275eld"](85, 0, null, null, 3, "option", [
                    ["value", "error"]
                ], null, null, null, null, null)), e["\u0275did"](86, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](87, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275ted"](-1, null, ["Error"])), (l()(), e["\u0275eld"](89, 0, null, null, 3, "option", [
                    ["value", "crash"]
                ], null, null, null, null, null)), e["\u0275did"](90, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](91, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275ted"](-1, null, ["Crash"])), (l()(), e["\u0275eld"](93, 0, null, null, 21, "div", [
                    ["class", "uk-width-1-1 uk-flex uk-flex-middle ow2-form-row uk-position-relative uk-margin-small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 3, "div", [
                    ["class", "uk-width-small uk-margin-remove ow2-form-input-label required"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize"],
                    ["text", "Type"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Priority"])), (l()(), e["\u0275eld"](97, 0, null, null, 0, "span", [
                    ["class", "required"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 16, "div", [
                    ["class", "uk-form-controls uk-width-expand uk-margin-remove ow2-form-input-row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 15, "select", [
                    ["class", "uk-select ow2-select size2"],
                    ["id", "type"],
                    ["name", "type"],
                    ["ng-model", "bug.type"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](100, 0, null, null, 2, "option", [
                    ["value", "? undefined:undefined ?"]
                ], null, null, null, null, null)), e["\u0275did"](101, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](102, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275eld"](103, 0, null, null, 3, "option", [
                    ["value", "bug"]
                ], null, null, null, null, null)), e["\u0275did"](104, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](105, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275ted"](-1, null, ["High"])), (l()(), e["\u0275eld"](107, 0, null, null, 3, "option", [
                    ["value", "error"]
                ], null, null, null, null, null)), e["\u0275did"](108, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](109, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275ted"](-1, null, ["Medium"])), (l()(), e["\u0275eld"](111, 0, null, null, 3, "option", [
                    ["value", "crash"]
                ], null, null, null, null, null)), e["\u0275did"](112, 147456, null, 0, r.NgSelectOption, [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), e["\u0275did"](113, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [e.ElementRef, e.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275ted"](-1, null, ["Low"])), (l()(), e["\u0275eld"](115, 0, null, null, 5, "div", [
                    ["class", "uk-margin uk-padding-small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](116, 0, null, null, 2, "label", [
                    ["class", "uk-form-label uk-text-uppercase"],
                    ["for", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 1, "span", [
                    ["class", "uk-text-capitalize "],
                    ["text", "Add Attachment"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["add attachment"])), (l()(), e["\u0275eld"](119, 0, null, null, 1, "div", [
                    ["class", "uk-form-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 0, "input", [
                    ["class", "file_upload_modal"],
                    ["file-model", "bug.media.value"],
                    ["file-name", "bug.media.filename"],
                    ["file-size", "bug.media.size"],
                    ["file-type", "bug.media.type"],
                    ["file-uri", "bug.media.uris"],
                    ["my-single-file", ""],
                    ["type", "file"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 2, "div", [
                    ["class", "footer_bottom_modal uk-text-right uk-margin-small uk-padding-small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 1, "button", [
                    ["class", "uk-button uk-button-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["submit"]))], function(l, n) {
                    var u = n.component,
                        e = l(n, 2, 0, u.collapsed);
                    l(n, 1, 0, "sidebar", e), l(n, 4, 0, u.showAdministrator), l(n, 6, 0, u.showControlPanel), l(n, 8, 0, u.showAdminPanel), l(n, 10, 0, u.managerMenu), l(n, 12, 0, u.supplierMenu);
                    var t = l(n, 15, 0, u.collapsed);
                    l(n, 14, 0, "toggle-button", t), l(n, 21, 0, !0 === u.dashboardVisible && !1 === u.supplierDashboardVisible && !1 === u.masterVisible && !1 === u.usersVisible && !1 === u.reportsVisible && !1 === u.modulesVisible && !1 === u.settingsVisible && !1 === u.customerSupplier && !1 === u.registrationVisible && !1 === u.showSupermanPanel), l(n, 23, 0, !0 === u.controlpanelVisible), l(n, 25, 0, !0 === u.companyListVisible), l(n, 27, 0, !0 === u.usersManagerVisible && !1 === u.customerSupplier), l(n, 29, 0, !0 === u.reportsVisible), l(n, 31, 0, !0 === u.customerSupplier), l(n, 33, 0, !0 === u.registrationVisible), l(n, 35, 0, !0 === u.supplierDashboardVisible && !0 === u.dashboardVisible), l(n, 37, 0, !0 === u.accountingDashboardVisibleForSupplier && !0 === u.supplierMenu && !0 === u.supplierDashboardVisible && !1 === u.dashboardVisible), l(n, 39, 0, !0 === u.accountingDashboardVisible && !1 === u.supplierMenu), l(n, 41, 0, !0 === u.modulesVisible), l(n, 43, 0, !0 === u.masterVisible && !0 === u.supplierModuleSettings.Products && !0 === u.supplierMenu), l(n, 45, 0, !0 === u.masterVisible && !1 === u.supplierMenu), l(n, 47, 0, !0 === u.usersVisible), l(n, 49, 0, !0 === u.settingsVisible), l(n, 79, 0, "? undefined:undefined ?"), l(n, 80, 0, "? undefined:undefined ?"), l(n, 82, 0, "bug"), l(n, 83, 0, "bug"), l(n, 86, 0, "error"), l(n, 87, 0, "error"), l(n, 90, 0, "crash"), l(n, 91, 0, "crash"), l(n, 101, 0, "? undefined:undefined ?"), l(n, 102, 0, "? undefined:undefined ?"), l(n, 104, 0, "bug"), l(n, 105, 0, "bug"), l(n, 108, 0, "error"), l(n, 109, 0, "error"), l(n, 112, 0, "crash"), l(n, 113, 0, "crash")
                }, function(l, n) {
                    l(n, 50, 0, n.component.pageLoader), l(n, 60, 0, e["\u0275nov"](n, 64).ngClassUntouched, e["\u0275nov"](n, 64).ngClassTouched, e["\u0275nov"](n, 64).ngClassPristine, e["\u0275nov"](n, 64).ngClassDirty, e["\u0275nov"](n, 64).ngClassValid, e["\u0275nov"](n, 64).ngClassInvalid, e["\u0275nov"](n, 64).ngClassPending)
                })
            }
        }
    }
]);