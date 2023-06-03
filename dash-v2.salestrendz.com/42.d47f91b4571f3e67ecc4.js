(window.webpackJsonp = window.webpackJsonp || []).push([
    [42], {
        UfZe: function(e, l, o) {
            "use strict";
            o.r(l);
            var d = o("8Y7J");
            class t {}
            var s = o("pMnS"),
                a = o("Rkfk"),
                u = o("5uAm"),
                r = o("iInd"),
                i = o("6GTT"),
                n = o("imvL"),
                m = o("EApP"),
                p = o("4Htz"),
                c = o("SVse");
            class h {
                constructor(e) {
                    this.change_detector = e
                }
                ngAfterViewChecked() {
                    this.change_detector.detectChanges()
                }
                ngOnInit() {}
                receiveCollapsed(e) {
                    this.collapedSideBar = e
                }
            }
            var g = d["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function C(e) {
                return d["\u0275vid"](0, [(e()(), d["\u0275eld"](0, 0, null, null, 1, "app-sidebar", [], null, [
                    [null, "collapsedEvent"]
                ], function(e, l, o) {
                    var d = !0;
                    return "collapsedEvent" === l && (d = !1 !== e.component.receiveCollapsed(o) && d), d
                }, a.b, a.a)), d["\u0275did"](1, 245760, null, 0, u.a, [r.Router, i.a, n.a, r.ActivatedRoute, m.k, p.a], null, {
                    collapsedEvent: "collapsedEvent"
                }), (e()(), d["\u0275eld"](2, 0, null, null, 4, "div", [], null, null, null, null, null)), d["\u0275did"](3, 278528, null, 0, c.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), d["\u0275pod"](4, {
                    collapsed: 0
                }), (e()(), d["\u0275eld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), d["\u0275did"](6, 212992, null, 0, r.RouterOutlet, [r.ChildrenOutletContexts, d.ViewContainerRef, d.ComponentFactoryResolver, [8, null], d.ChangeDetectorRef], null, null)], function(e, l) {
                    var o = l.component;
                    e(l, 1, 0);
                    var d = e(l, 4, 0, o.collapedSideBar);
                    e(l, 3, 0, d), e(l, 6, 0)
                }, null)
            }

            function M(e) {
                return d["\u0275vid"](0, [(e()(), d["\u0275eld"](0, 0, null, null, 1, "app-admin-module", [], null, null, null, C, g)), d["\u0275did"](1, 8503296, null, 0, h, [d.ChangeDetectorRef], null, null)], function(e, l) {
                    e(l, 1, 0)
                }, null)
            }
            var b = d["\u0275ccf"]("app-admin-module", h, M, {}, {}, []),
                v = o("s7LF"),
                f = o("ebCm");
            class k {}
            var _ = o("C9m0"),
                y = o("Pchq"),
                w = o("i17u");
            o.d(l, "AdminModuleModuleNgFactory", function() {
                return S
            });
            var S = d["\u0275cmf"](t, [], function(e) {
                return d["\u0275mod"]([d["\u0275mpd"](512, d.ComponentFactoryResolver, d["\u0275CodegenComponentFactoryResolver"], [
                    [8, [s.a, b]],
                    [3, d.ComponentFactoryResolver], d.NgModuleRef
                ]), d["\u0275mpd"](4608, c.NgLocalization, c.NgLocaleLocalization, [d.LOCALE_ID, [2, c["\u0275angular_packages_common_common_a"]]]), d["\u0275mpd"](4608, v["\u0275angular_packages_forms_forms_i"], v["\u0275angular_packages_forms_forms_i"], []), d["\u0275mpd"](4608, f.a, f.a, []), d["\u0275mpd"](1073742336, c.CommonModule, c.CommonModule, []), d["\u0275mpd"](1073742336, r.RouterModule, r.RouterModule, [
                    [2, r["\u0275angular_packages_router_router_a"]],
                    [2, r.Router]
                ]), d["\u0275mpd"](1073742336, k, k, []), d["\u0275mpd"](1073742336, v["\u0275angular_packages_forms_forms_bb"], v["\u0275angular_packages_forms_forms_bb"], []), d["\u0275mpd"](1073742336, v.FormsModule, v.FormsModule, []), d["\u0275mpd"](1073742336, _.a, _.a, []), d["\u0275mpd"](1073742336, y.SidebarModule, y.SidebarModule, []), d["\u0275mpd"](1073742336, w.a, w.a, []), d["\u0275mpd"](1073742336, t, t, []), d["\u0275mpd"](1024, r.ROUTES, function() {
                    return [
                        [{
                            path: "",
                            component: h,
                            children: [{
                                path: "flashmsgs",
                                loadChildren: "../modules/flashmsgs/flashmsgs.module#FlashmsgsModule"
                            }, {
                                path: "",
                                redirectTo: "dashboard-new/orders",
                                pathMatch: "full"
                            }, {
                                path: "settings/notifications",
                                loadChildren: "../modules/notification-settings/notification-settings.module#NotificationSettingsModule"
                            }, {
                                path: "dashboard",
                                loadChildren: "../modules/dashboard/dashboard.module#DashboardModule"
                            }, {
                                path: "dashboard-new",
                                loadChildren: "../modules/dashboard-new/dashboard-new.module#DashboardNewModule"
                            }, {
                                path: "live-tracking",
                                loadChildren: "../modules/live-tracking/live-tracking.module#LiveTrackingModule"
                            }, {
                                path: "targets",
                                loadChildren: "../modules/target/target.module#TargetModule"
                            }, {
                                path: "target",
                                loadChildren: "../modules/targets/targets.module#TargetsModule"
                            }, {
                                path: "brochure",
                                loadChildren: "../modules/brochure/brochure.module#BrochureModule"
                            }, {
                                path: "collections",
                                loadChildren: "../modules/collections/collections.module#CollectionsModule"
                            }, {
                                path: "account-masters",
                                loadChildren: "../modules/account-masters/account-masters.module#AccountMastersModule"
                            }, {
                                path: "custom-forms",
                                loadChildren: "../modules/custom-forms/custom-forms.module#CustomFormsModule"
                            }, {
                                path: "survey",
                                loadChildren: "../modules/survey/survey.module#SurveyModule"
                            }, {
                                path: "feedback",
                                loadChildren: "../modules/feedback/feedback.module#FeedbackModule"
                            }, {
                                path: "expense",
                                loadChildren: "../modules/expense/expense.module#ExpenseModule"
                            }, {
                                path: "ticket",
                                loadChildren: "../modules/ticket/ticket.module#TicketModule"
                            }, {
                                path: "eod-reports",
                                loadChildren: "../modules/eod-reports/eod-reports.module#EodReportsModule"
                            }, {
                                path: "survey",
                                loadChildren: "../modules/survey/survey.module#SurveyModule"
                            }, {
                                path: "reports",
                                loadChildren: "../modules/reports/reports.module#ReportsModule"
                            }, {
                                path: "reports/:report_type",
                                loadChildren: "../modules/reports/report-details/report-details.module#ReportDetailsModule"
                            }, {
                                path: "customers-old",
                                loadChildren: "../modules/customers-old/customers.module#CustomersModule"
                            }, {
                                path: "supplier-new",
                                loadChildren: "../modules/supplier-new/supplier-new.module#SupplierNewModule"
                            }, {
                                path: "user-creation",
                                loadChildren: "../modules/new-user/new-user.module#NewUserModule"
                            }, {
                                path: "customers",
                                loadChildren: "../modules/customers/new-customer.module#NewCustomerModule"
                            }, {
                                path: "myaccount",
                                loadChildren: "../modules/myaccount/myaccount.module#MyaccountModule"
                            }, {
                                path: "global-setting",
                                loadChildren: "../modules/global-setting-module/global-setting-module.module#GlobalSettingModuleModule"
                            }, {
                                path: "myaccount/notification",
                                loadChildren: "../modules/myaccount/notification/notification.module#NotificationModule"
                            }, {
                                path: "myaccount/billing",
                                loadChildren: "../modules/myaccount/billing/billing.module#BillingModule"
                            }, {
                                path: "global-setting/billing",
                                loadChildren: "../modules/global-setting-module/billing/billing.module#BillingModule"
                            }, {
                                path: "salesman",
                                loadChildren: "../modules/salesman/salesman.module#SalesmanModule"
                            }, {
                                path: "state",
                                loadChildren: "../modules/state/state.module#StateModule"
                            }, {
                                path: "suppliers",
                                loadChildren: "../modules/suppliers/suppliers.module#SuppliersModule"
                            }, {
                                path: "orders",
                                loadChildren: "../modules/orders/orders-root.module#OrdersRootModule"
                            }, {
                                path: "freesample",
                                loadChildren: "../modules/freesample/freesample.module#FreesampleModule"
                            }, {
                                path: "organisationsettings",
                                loadChildren: "../modules/organisationsettings/organisationsettings.module#OrganisationsettingsModule"
                            }, {
                                path: "admin",
                                loadChildren: "../modules/admin/admin.module#AdminModule"
                            }, {
                                path: "manager",
                                loadChildren: "../modules/manager/manager.module#ManagerModule"
                            }, {
                                path: "sub-manager",
                                loadChildren: "../modules/sub-manager/sub-manager.module#SubManagerModule"
                            }, {
                                path: "pricelist",
                                loadChildren: "../modules/pricelist/pricelist.module#PricelistModule"
                            }, {
                                path: "productmaster",
                                loadChildren: "../modules/product-master/product-master.module#ProductMasterModule"
                            }, {
                                path: "settings/product-master-settings",
                                loadChildren: "../modules/settings/product-master-settings/product-master-settings.module#ProductMasterSettingsModule"
                            }, {
                                path: "settings/activity-settings",
                                loadChildren: "../modules/settings/activity-settings/activity-settings.module#ActivitySettingsModule"
                            }, {
                                path: "products",
                                loadChildren: "../modules/products/products.module#ProductsModule"
                            }, {
                                path: "organizations",
                                loadChildren: "../modules/organizations/organizations.module#OrganizationsModule"
                            }, {
                                path: "customertypes",
                                loadChildren: "../modules/customertypes/customertypes.module#CustomertypesModule"
                            }, {
                                path: "suppliertypes",
                                loadChildren: "../modules/suppliertypes/suppliertypes.module#SuppliertypesModule"
                            }, {
                                path: "performancemartix",
                                loadChildren: "../modules/performancemartix/performancemartix.module#PerformancemartixModule"
                            }, {
                                path: "activitymasters",
                                loadChildren: "../modules/activitymasters/activitymasters.module#ActivitymastersModule"
                            }, {
                                path: "about",
                                loadChildren: "../modules/about/about.module#AboutModule"
                            }, {
                                path: "acknowledgement",
                                loadChildren: "../modules/acknowledgement/acknowledgement.module#AcknowledgementModule"
                            }, {
                                path: "supplied/details/:ord_id",
                                loadChildren: "../modules/order-inner-details/order-inner-details.module#OrderInnerDetailsModule"
                            }, {
                                path: "supplied/details/:ord_id/:common_id",
                                loadChildren: "../modules/order-inner-details/order-inner-details.module#OrderInnerDetailsModule"
                            }, {
                                path: "addtocart/:cust_id/:sup_id",
                                loadChildren: "../modules/add-to-cart/add-to-cart.module#AddToCartModule"
                            }, {
                                path: "bookorder/:cust_id/:sup_id",
                                loadChildren: "../modules/bookorder/bookorder.module#BookorderModule"
                            }, {
                                path: "customer/stock/:cust_id",
                                loadChildren: "../modules/customers-stock-details/customers-stock-details.module#CustomersStockDetailsModule"
                            }, {
                                path: "supplier/stock/:sup_id",
                                loadChildren: "../modules/suppliers-stock-details/suppliers-stock-details.module#SuppliersStockDetailsModule"
                            }, {
                                path: "markOrder/:ord_id/:cust_id/:sup_id",
                                loadChildren: "../modules/mark-order/mark-order.module#MarkOrderModule"
                            }, {
                                path: "customer/return/:cust_id",
                                loadChildren: "../modules/customers-return-details/customers-return-details.module#CustomersReturnDetailsModule"
                            }, {
                                path: "supplier/return/:sup_id",
                                loadChildren: "../modules/suppliers-return-details/suppliers-return-details.module#SuppliersReturnDetailsModule"
                            }, {
                                path: "cloneorder/:ord_id/:cust_id/:sup_id",
                                loadChildren: "../modules/cloneorder/cloneorder.module#CloneorderModule"
                            }, {
                                path: "clonebookorder/:ord_id/:cust_id/:sup_id",
                                loadChildren: "../modules/clonebookorder/clonebookorder.module#ClonebookorderModule"
                            }, {
                                path: "sampleaddtocart/:cust_id/:sup_id",
                                loadChildren: "../modules/sampleaddtocart/sampleaddtocart.module#SampleaddtocartModule"
                            }, {
                                path: "samplebookorder/:cust_id/:sup_id",
                                loadChildren: "../modules/samplebookorder/samplebookorder.module#SamplebookorderModule"
                            }, {
                                path: "freesample/supplied/details/:sample_id",
                                loadChildren: "../modules/sampleinnerdetails/sampleinnerdetails.module#SampleinnerdetailsModule"
                            }, {
                                path: "settings",
                                loadChildren: "../modules/settings/settings.module#SettingsModule"
                            }, {
                                path: "settings/activitysettings/notification",
                                loadChildren: "../modules/settings/activity-settings/notification/notification.module#NotificationModule"
                            }, {
                                path: "call-log",
                                loadChildren: "../modules/call-log/call-log.module#CallLogModule"
                            }, {
                                path: "target/achievement",
                                loadChildren: "../modules/target/target-achievements/target-achievements.module#TargetAchievementsModule"
                            }, {
                                path: "invoice",
                                loadChildren: "../modules/invoice/invoice.module#InvoiceModule"
                            }, {
                                path: "dms",
                                loadChildren: "../modules/dms/dms.module#DmsModule"
                            }, {
                                path: "settings/stock-settings",
                                loadChildren: "../modules/settings/stock-settings/stock-settings.module#StockSettingsModule"
                            }, {
                                path: "live-images",
                                loadChildren: "../modules/live-images/live-images.module#LiveImagesModule"
                            }, {
                                path: "lead",
                                loadChildren: "../modules/lead/lead.module#LeadModule"
                            }, {
                                path: "deal",
                                loadChildren: "../modules/deals/deals.module#DealsModule"
                            }, {
                                path: "attendance-scheduler",
                                loadChildren: "../modules/attendance-scheduler/attendance-scheduler.module#AttendanceSchedulerModule"
                            }, {
                                path: "registration/supplier",
                                loadChildren: "../modules/registration-supplier/registration-supplier.module#RegistrationSupplierModule"
                            }, {
                                path: "registration/consumer",
                                loadChildren: "../modules/registration-consumer/registration-consumer.module#RegistrationConsumerModule"
                            }, {
                                path: "settings/website-settings",
                                loadChildren: "../modules/settings/website-settings/website-settings.module#WebsiteSettingsModule"
                            }, {
                                path: "settings/accounting-settings",
                                loadChildren: "../modules/settings/accounting/accounting-settings.module#AccountingSettingsModule"
                            }, {
                                path: "schemes",
                                loadChildren: "../modules/schemes/schemes.module#SchemesModule"
                            }, {
                                path: "customers-new",
                                loadChildren: "../modules/customers-new/customers-new.module#CustomersNewModule"
                            }, {
                                path: "suppliers-new",
                                loadChildren: "../modules/suppliers-new/suppliers-new.module#SuppliersNewModule"
                            }, {
                                path: "users-new",
                                loadChildren: "../modules/users-new/users-new.module#UsersNewModule"
                            }, {
                                path: "settings/livetracking-settings",
                                loadChildren: "../modules/settings/livetracking-settings/livetracking-settings.module#LivetrackingSettingsModule"
                            }, {
                                path: "settings/supplier-settings",
                                loadChildren: "../modules/settings/supplier-settings/supplier-settings.module#SupplierSettingsModule"
                            }, {
                                path: "settings/customer-settings",
                                loadChildren: "../modules/settings/customer-settings/customer-settings.module#CustomerSettingsModule"
                            }]
                        }]
                    ]
                }, [])])
            })
        }
    }
]);