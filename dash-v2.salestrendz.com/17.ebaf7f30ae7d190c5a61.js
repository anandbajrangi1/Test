(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        z4XT: function(e, t, s) {
            "use strict";
            s.d(t, "a", function() {
                return d
            });
            var r = s("IheW"),
                i = s("XNiG"),
                a = s("z6cu"),
                o = s("JIr8"),
                n = s("tS1D"),
                u = s("Vx+w"),
                h = (s("hqVf"), s("8Y7J")),
                p = s("mkwN");
            class d {
                constructor(e, t) {
                    this.http = e, this.mScrollbarService = t, this.API_URL = u.a.apiUrl, this.socketUrl = u.a.livesocket_url, this.format = "json", this.userData = {}, this.accessIsVisible = 0, this.isAccess = new i.a, this.limit = 10, this.feedbackActivityPage = 1, this.page = 0, this.pagesize = 10, this.scrollY = new i.a, this.isStatus = new i.a, this.isUserimport = new i.a, this.localStorageData()
                }
                localStorageData() {
                    this.params = JSON.parse(localStorage.getItem("user")), this.userData = this.params
                }
                handleError(e) {
                    return e.error instanceof ErrorEvent ? console.error("An error occurred:", e.error.message) : console.error(`Backend returned code ${e.status}, ` + `body was: ${e.error}`), Object(a.a)("Something bad happened; please try again later.")
                }
                loadMore() {
                    this.mScrollbarService.initScrollbar("#managerList", {
                        axis: "y",
                        theme: "dark-thin",
                        autoHideScrollbar: !0,
                        scrollInertia: 50,
                        callbacks: {
                            onTotalScroll: () => {
                                this.scrollY.next(this.onScrollDown(this))
                            },
                            onTotalScrollOffset: 250
                        }
                    })
                }
                onScrollDown(e) {
                    this.page += 1
                }
                isScroll() {
                    return this.scrollY.asObservable()
                }
                accessEdit() {
                    return this.isAccess.next(this.accessIsVisible = 1), this.accessIsVisible
                }
                accessDone() {
                    return this.isAccess.next(this.accessIsVisible = 0), this.accessIsVisible
                }
                isVisible() {
                    return this.isAccess.asObservable()
                }
                userStatus(e) {
                    return this.isStatus.next(this.status = e), this.status
                }
                isActive() {
                    return this.isStatus.asObservable()
                }
                importUser(e) {
                    return this.isUserimport.next(e), this.isUserimport
                }
                isImportuser() {
                    return this.isUserimport.asObservable()
                }
                isActiveaction(e) {
                    console.log("this.userId", this.userId), this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/action?format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&val=" + e + "&id=" + this.userId + "&comp_id=" + this.userData.comp_id, t).pipe(Object(o.a)(this.handleError))
                }
                getBulkEntries(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e.pagenum + "&pagesize=" + e.pagesize + "&user_record_type=&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + e.searchkeyword, t).pipe(Object(o.a)(this.handleError))
                }
                managerUserList(e, t, s, i) {
                    this.localStorageData();
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&user_record_type=" + i + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + s, a).pipe(Object(o.a)(this.handleError))
                }
                UnAssignSupllier(e, t, s, i) {
                    this.localStorageData();
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/supplier/unassigned/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_id=" + s + "&keyword=" + i, a).pipe(Object(o.a)(this.handleError))
                }
                UnAssignCustomer(e, t, s, i) {
                    this.localStorageData();
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/customer/unassigned/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_id=" + s + "&keyword=" + i, a).pipe(Object(o.a)(this.handleError))
                }
                managerUserList8() {
                    this.localStorageData();
                    const e = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/lists?comp_id=" + this.userData.comp_id + "&page=" + this.page + "&limit=" + this.limit + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_type_id=8", e).pipe(Object(o.a)(this.handleError))
                }
                CustOrderListing(e) {
                    let t = e;
                    this.localStorageData();
                    const s = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "web/order/lists?comp_id=" + this.userData.comp_id + "&user_id=" + t + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&page=1&limit=15", s).pipe(Object(o.a)(this.handleError))
                }
                returnTypeinfo(e) {
                    let t = e;
                    this.localStorageData();
                    const s = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "web/customer/activitylst?comp_id=" + this.userData.comp_id + "&user_id=" + t + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&page=1&limit=15&type=cust_return_lst", s).pipe(Object(o.a)(this.handleError))
                }
                getTeamMembers(e) {
                    let t;
                    e.forEach(e => {
                        t += "&orgs[]=" + e
                    });
                    const s = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return t += "&user_id=", this.http.get(this.API_URL + "web/team/all?comp_id=" + this.userData.comp_id + "&page=" + this.page + "&limit=" + this.limit + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_type_id=4" + (t += "&type=manager"), s).pipe(Object(o.a)(this.handleError))
                }
                getSalesmen(e, t, s) {
                    this.localStorageData();
                    let i = {
                        type: "",
                        user_id: ""
                    };
                    t.forEach(e => {
                        i += "&orgs[]=" + e
                    });
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return i.type = e, i.user_id = s, this.http.get(this.API_URL + "web/team/all?comp_id=" + this.userData.comp_id + "&page=" + this.page + "&limit=" + this.limit + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_type_id=4" + i, a).pipe(Object(o.a)(this.handleError))
                }
                searchuserList(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "web/user/lists?comp_id=" + this.userData.comp_id + "&page=" + this.page + "&limit=" + this.limit + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_type_id=3&like=" + e, t).pipe(Object(o.a)(this.handleError))
                }
                searchuserList8(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "web/user/lists?comp_id=" + this.userData.comp_id + "&page=" + this.page + "&limit=" + this.limit + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_type_id=8&like=" + e, t).pipe(Object(o.a)(this.handleError))
                }
                imageUpload(e, t) {
                    this.localStorageData();
                    let s = new FormData;
                    s.append("comp_id", this.userData.comp_id), s.append("user_id", t), s.append("logged_in_userid", this.userData.user_id), s.append("format", this.format), s.append("image", e);
                    const i = {
                        headers: new r.g({
                            Accept: "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.post(this.API_URL + "user/image/add", s, i).pipe(Object(o.a)(this.handleError))
                }
                useractivityList(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/activitylst?comp_id=" + this.userData.comp_id + "&user_id=" + e + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&page=" + this.page + "&limit=" + this.limit + "&rel=web", t).pipe(Object(o.a)(this.handleError))
                }
                liveImageList(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "customer/liveimage/lists?cust_id=" + e + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id, t).pipe(Object(o.a)(this.handleError))
                }
                usereditInfo(e) {
                    this.userId = e, this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/edit/form?comp_id=" + this.userData.comp_id + "&user_id=" + e + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&org_id=" + this.userData.org_id, t).pipe(Object(o.a)(this.handleError))
                }
                usereTarget(e) {
                    this.userId = e, this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "mobile/target/user/list?comp_id=" + this.userData.comp_id + "&user_id=" + e + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&user_type_id=" + this.userId + "&datex=05-01-2020-02 - 03-2020", t).pipe(Object(o.a)(this.handleError))
                }
                targetList() {
                    this.localStorageData();
                    const e = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "target/tabular/Alllist?comp_id=" + this.userData.comp_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id, e).pipe(Object(o.a)(this.handleError))
                }
                sort_by(e) {
                    var t = e;
                    this.localStorageData();
                    const s = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "target/sort?comp_id=" + this.userData.comp_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&order_by=" + t, s).pipe(Object(o.a)(this.handleError))
                }
                FeedbackAgainstactivity(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/activitylst?user_id=" + e + "&logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id + "&format=" + this.format + "&limit=10&page=" + this.feedbackActivityPage, t).pipe(Object(o.a)(this.handleError))
                }
                userEditSave(e) {
                    this.localStorageData();
                    const t = {
                            usertype: e.user_type_id,
                            user_id: e.user_id,
                            phone_number: e.user_number,
                            emp_code: e.user_emp,
                            designation: e.user_designation,
                            user_status: e.status,
                            logged_in_userid: this.userData.user_id,
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            user_email: e.user_email,
                            selectedMembers: e.selectedMembers,
                            organisation_id: e.org_id,
                            user_name: e.user_fname
                        },
                        s = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/edit/save", t, s).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                saveimportCustSup(e) {
                    this.localStorageData(), e.append("comp_id", this.userData.comp_id), e.append("logged_in_userid", this.userData.user_id), console.log("Data", e);
                    const t = {
                        headers: new r.g({
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.post(this.API_URL + "user/export", e, t).pipe(Object(o.a)(this.handleError))
                }
                generateDownloadLink(e) {
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/export?logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id + "&info=" + e, t).pipe(Object(o.a)(this.handleError))
                }
                downloadUserGrid(e) {
                    new r.g({
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.userData.token
                    });
                    let t = "";
                    e.filter_list.forEach((e, s) => {
                        t = t + "&filter_array[" + s + "][filter_key]=" + e.filter_key + " &filter_array[" + s + "][filter_value]=" + e.filter_value
                    }), window.open(this.API_URL + "user/export?logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id + "&format=json&key=" + e.key + "&type=" + e.type + "&info=" + e.info + "&exportable_account=" + e.ac_type + t, "_blank")
                }
                ExportFormKeyGenerator(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/export?logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id + "&info=" + e, t).pipe(Object(o.a)(this.handleError))
                }
                samplefile() {
                    this.localStorageData(), new r.g({
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.userData.token
                    }), window.open(this.API_URL + "user/export/sample?logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id + "&format=json", "_blank")
                }
                getUserExport(e, t, s, i) {
                    this.localStorageData(), new r.g({
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.userData.token
                    });
                    let a = "";
                    i.forEach((e, t) => {
                        a = a + "&filter_array[" + t + "][filter_key]=" + e.filter_key + " &filter_array[" + t + "][filter_value]=" + e.filter_value
                    }), window.open(this.API_URL + "user/export?logged_in_userid=" + this.userData.user_id + "&comp_id=" + this.userData.comp_id + "&format=json&key=" + e + "&type=" + t + "&info=" + s + a, "_blank")
                }
                filterUsersGrid(e, t) {
                    const s = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/all?comp_id=" + +this.userData.comp_id + "&user_record_type=&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + e + t, s).pipe(Object(o.a)(this.handleError))
                }
                searchIndividualCustomerSupplier(e, t, s, i, a) {
                    this.localStorageData();
                    const n = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    let u = "";
                    return i.forEach((e, t) => {
                        u = u + "&filter_array[" + t + "][filter_key]=" + e.filter_key + " &filter_array[" + t + "][filter_value]=" + e.filter_value
                    }), this.http.get(this.API_URL + "user/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&user_record_type=" + a + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + s + u, n).pipe(Object(o.a)(this.handleError))
                }
                getOrgID(e) {
                    let t = [];
                    for (let s = 0; s < e.length; s++) t.push(e[s].org_id);
                    return t
                }
                updateUserType(e) {
                    e.comp_id = this.userData.comp_id, e.logged_in_userid = this.userData.user_id, e.format = this.format;
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.post(this.API_URL + "user/edit/save", e, t).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                userEditSaveSingle(e, t) {
                    this.localStorageData();
                    const s = {
                            usertype: e.user_type_id,
                            user_id: e.user_id,
                            phone_number: e.user_number,
                            emp_code: e.user_emp,
                            designation: e.user_designation,
                            user_status: e.status,
                            logged_in_userid: this.userData.user_id,
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            user_email: e.user_email,
                            selectedMembers: t,
                            organisation_id: this.userData.org_id,
                            user_name: e.user_name
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/edit/save", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                getusers(e, t) {
                    let s = [];
                    for (let r = 0; r < t.length; r++) s.push({
                        user_id: t[r].user_id,
                        user_name: t[r].user_name,
                        status: t[r].status,
                        phone_number: t[r].user_number,
                        user_email: t[r].user_email,
                        user_type_id: e
                    });
                    return s
                }
                userEditSaveMulti(e, t, s) {
                    this.localStorageData();
                    let i = {};
                    i = 2 === e ? {
                        logged_in_userid: this.userData.user_id,
                        comp_id: this.userData.comp_id,
                        users: this.getusers(e, t)
                    } : {
                        logged_in_userid: this.userData.user_id,
                        comp_id: this.userData.comp_id,
                        organisation_id: s,
                        users: this.getusers(e, t)
                    }, console.log("orglistsdata", s);
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.post(this.API_URL + "user/convert?comp_id=" + this.userData.comp_id + "&format=json&logged_in_userid=" + this.userData.logged_in_userid + "&pagenum=0&pagesize=10&keyword=", i, a).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                userEditSave2(e, t) {
                    this.localStorageData();
                    const s = {
                            usertype: e.user_type_id,
                            user_id: e.user_id,
                            phone_number: e.user_number,
                            emp_code: e.user_emp,
                            designation: e.user_designation,
                            user_status: e.user_status,
                            logged_in_userid: this.userData.user_id,
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            user_email: e.user_email,
                            selectedMembers: t,
                            organisation_id: this.getOrgID(e.orglst),
                            user_name: e.user_fname
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/edit/save", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                getCustomerTypelist() {
                    this.localStorageData();
                    const e = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "customertype/lists?comp_id=" + this.userData.comp_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&page=" + this.page + "&limit=0&org_id=" + this.userData.org_id, e).pipe(Object(o.a)(this.handleError))
                }
                userTypeList() {
                    this.localStorageData();
                    const e = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/type/all?comp_id=" + this.userData.comp_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id, e).pipe(Object(o.a)(this.handleError))
                }
                createNewUser(e) {
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return e.comp_id = this.userData.comp_id, e.format = this.format, e.logged_in_userid = this.userData.user_id, this.http.post(this.API_URL + "user/insert", e, t).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                userInsert(e) {
                    this.localStorageData();
                    const t = {
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            logged_in_userid: this.userData.user_id,
                            organisation_id: e.selected_org_list,
                            phone_number: e.phone_number,
                            phone_number_confirmation: e.phone_number_confirmation,
                            user_email: e.user_email,
                            emp_code: e.user_emp,
                            designation: e.designation,
                            user_name: e.user_name,
                            selectedMembers: e.selectedMembers,
                            user_status: 1,
                            usertype: e.usertype
                        },
                        s = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/insert", t, s).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                userInsertAdmin(e) {
                    this.localStorageData();
                    const t = {
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            logged_in_userid: this.userData.user_id,
                            organisation_id: this.userData.org_id,
                            phone_number: e.phone_number,
                            phone_number_confirmation: e.phone_number_confirmation,
                            user_email: e.user_email,
                            emp_code: e.user_emp,
                            designation: e.user_designation,
                            user_name: e.user_name,
                            selectedMembers: e.selectedMembers,
                            user_status: 1,
                            usertype: e.usertype
                        },
                        s = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/insert", t, s).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                postConversionDetails(e) {
                    this.localStorageData();
                    const t = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.post(this.API_URL + "customer/supplier/convert", e, t).pipe(Object(o.a)(this.handleError))
                }
                userInsertsalesman(e) {
                    this.localStorageData();
                    const t = {
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            logged_in_userid: this.userData.user_id,
                            organisation_id: e.organisation_id,
                            phone_number: e.phone_number,
                            phone_number_confirmation: e.phone_number_confirmation,
                            user_email: e.user_email,
                            emp_code: e.user_emp,
                            designation: e.user_designation,
                            user_name: e.user_name,
                            selectedMembers: e.selectedMembers,
                            user_status: 1,
                            usertype: 4
                        },
                        s = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/insert", t, s).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                getroute(e) {
                    let t = [];
                    for (let s = 0; s < e.length; s++) t.push({
                        route_id: e[s].route_id,
                        status: e[s].status
                    });
                    return t
                }
                routeAccess(e, t) {
                    this.localStorageData();
                    const s = {
                            comp_id: this.userData.comp_id,
                            logged_in_userid: this.userData.user_id,
                            format: this.format,
                            user_id: e,
                            route_list: this.getroute(t)
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/info/route/assign", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                AssignsupList(e, t, s, i) {
                    this.localStorageData();
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/supplier/unassigned/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&org_id=" + this.userData.org_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + s + "&user_id=" + i, a).pipe(Object(o.a)(this.handleError))
                }
                AssigncustList(e, t, s, i) {
                    this.localStorageData();
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/customer/unassigned/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&org_id=" + this.userData.org_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + s + "&user_id=" + i, a).pipe(Object(o.a)(this.handleError))
                }
                AssignrouteList(e, t, s, i) {
                    this.localStorageData();
                    const a = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "user/route/unassigned/all?comp_id=" + this.userData.comp_id + "&pagenum=" + e + "&pagesize=" + t + "&org_id=" + this.userData.org_id + "&format=" + this.format + "&logged_in_userid=" + this.userData.user_id + "&keyword=" + s + "&user_id=" + i, a).pipe(Object(o.a)(this.handleError))
                }
                getlist(e) {
                    let t = [];
                    for (let s = 0; s < e.length; s++) t.push({
                        cust_id: e[s].cust_id,
                        status: e[s].status
                    });
                    return t
                }
                customerAccess(e, t) {
                    this.localStorageData();
                    const s = {
                            comp_id: this.userData.comp_id,
                            logged_in_userid: this.userData.user_id,
                            format: this.format,
                            user_id: e,
                            org_id: this.userData.org_id,
                            cust_list: this.getlist(t)
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/info/customer/assign", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                suplist(e) {
                    let t = [];
                    for (let s = 0; s < e.length; s++) t.push({
                        sup_id: e[s].sup_id,
                        status: e[s].status
                    });
                    return t
                }
                supplierAccess(e, t) {
                    this.localStorageData();
                    const s = {
                            comp_id: this.userData.comp_id,
                            logged_in_userid: this.userData.user_id,
                            format: this.format,
                            user_id: e,
                            org_id: this.userData.org_id,
                            sup_list: this.suplist(t)
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/info/supplier/assign", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                userInsert8(e, t) {
                    this.localStorageData();
                    const s = {
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            logged_in_userid: this.userData.user_id,
                            organisation_id: t,
                            phone_number: e.phone_number,
                            phone_number_confirmation: e.phone_number_confirmation,
                            user_email: e.user_email,
                            user_name: e.user_name,
                            emp_code: e.user_emp,
                            designation: e.user_designation,
                            selectedMembers: e.selectedMembers,
                            user_status: 1,
                            usertype: 8
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/insert", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                insertUserExcelList(e, t) {
                    this.localStorageData();
                    const s = {
                            comp_id: this.userData.comp_id,
                            format: this.format,
                            logged_in_userid: this.userData.user_id,
                            organisation_id: t,
                            phone_number: e.phonenumber,
                            phone_number_confirmation: e.phonenumber,
                            user_email: e.useremail,
                            user_name: e.username,
                            user_status: 1,
                            usertype: e.usertype
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + this.userData.token
                            })
                        };
                    return this.http.post(this.API_URL + "user/insert", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
                userOrgList() {
                    this.localStorageData();
                    const e = {
                        headers: new r.g({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.userData.token
                        })
                    };
                    return this.http.get(this.API_URL + "web/organisation/lists?comp_id=" + this.userData.comp_id + "&page=1&limit=0&format=" + this.format + "&logged_in_userid=" + this.userData.user_id, e).pipe(Object(o.a)(this.handleError))
                }
                managerJourney(e, t) {
                    this.localStorageData();
                    const s = {
                            comp_id: this.userData.comp_id,
                            user_id: e,
                            org_id: this.userData.org_id,
                            date: t,
                            logged_in_userid: this.userData.user_id,
                            user_type: 3
                        },
                        i = {
                            headers: new r.g({
                                "Content-Type": "application/json"
                            })
                        };
                    return this.http.post(this.socketUrl + "routeInfo", s, i).pipe(Object(o.a)(this.handleError), Object(n.a)(15e3))
                }
            }
            d.ngInjectableDef = h.defineInjectable({
                factory: function() {
                    return new d(h.inject(r.c), h.inject(p.a))
                },
                token: d,
                providedIn: "root"
            })
        }
    }
]);