"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [137],
  {
    5137: (Dn, Ce, r) => {
      r.r(Ce), r.d(Ce, { ApproveScannerModule: () => B });
      var p = r(36895),
        Q = r(19132),
        Y = r(49671),
        c = r(70655),
        e = r(94650),
        ye = r(96053),
        d = r(83428),
        v = r(24006);
      const Ge = [
        d.BLOCKCHAIN_NAME.ETHEREUM,
        d.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
        d.BLOCKCHAIN_NAME.POLYGON,
        d.BLOCKCHAIN_NAME.ARBITRUM,
        d.BLOCKCHAIN_NAME.OPTIMISM,
        d.BLOCKCHAIN_NAME.AVALANCHE,
        d.BLOCKCHAIN_NAME.FANTOM,
      ];
      var R = r(61135),
        Z = r(68675),
        Je = r(34782),
        G = r(92718),
        S = r(63900),
        b = r(54004),
        D = r(39646),
        xe = r(4128),
        be = r(69751),
        j = r(78224),
        Xe = r(9469),
        qe = r(40223),
        ke = r(50404),
        J = r(15719),
        et = r(637),
        tt = r(39300),
        Te = r(79094),
        ae = r(18505),
        nt = r(13099),
        z = r(50590),
        ot = r(70262),
        we = r(78372),
        it = r(54750),
        at = r(98210),
        rt = r(50866),
        Me = r(42801),
        st = r(80529),
        ct = r(22307),
        re = r(89383);
      class y {
        constructor(o, t, i, a, s, l, u, g, m) {
          (this.walletConnectorService = o),
            (this.httpService = t),
            (this.injector = i),
            (this.dialogService = a),
            (this.tokensService = s),
            (this.tokensStoreService = l),
            (this.notificationsService = u),
            (this.translateService = g),
            (this.gasService = m),
            (this._exceededLimits$ = new R.X(!1)),
            (this.exceededLimits$ = this._exceededLimits$.asObservable()),
            (this.supportedBlockchains = Object.entries(ye.Y)
              .filter(([_]) => Ge.includes(_))
              .map(([_, W]) => W)),
            (this.defaultBlockchain =
              this.supportedBlockchains.find(
                (_) =>
                  _.key ===
                  (this.walletConnectorService.network ??
                    d.BLOCKCHAIN_NAME.ETHEREUM)
              ) ?? ye.Y.ETH),
            (this.form = new v.FormGroup({
              blockchain: new v.FormControl(this.defaultBlockchain),
            })),
            (this.queryForm = new v.FormGroup({
              spender: new v.FormControl(""),
              token: new v.FormControl(""),
            })),
            (this.selectedBlockchain$ =
              this.form.controls.blockchain.valueChanges.pipe(
                (0, Z.O)(this.form.controls.blockchain.value),
                (0, Je.d)(qe.H)
              )),
            (this._refreshTable$ = new R.X("")),
            (this.refreshTable$ = this._refreshTable$.asObservable()),
            (this.allApproves$ = this.selectedBlockchain$.pipe(
              (0, Z.O)(this.defaultBlockchain),
              (0, G.V)(
                this.walletConnectorService.addressChange$.pipe(
                  (0, tt.h)((_) => null !== _)
                ),
                this.refreshTable$
              ),
              (0, Te.x)(),
              (0, ae.b)(() => {
                (this.tableLoading = !0),
                  (this.page = 0),
                  (this.tokenSearchQuery = ""),
                  (this.spenderSearchQuery = "");
              }),
              (0, S.w)(([_, W, ne]) => this.fetchTransactions(_, W, ne)),
              (0, ae.b)(() => (this.tableLoading = !1))
            )),
            (this._tableLoading$ = new R.X(!0)),
            (this.tableLoading$ = this._tableLoading$.asObservable()),
            (this._size$ = new R.X(10)),
            (this.size$ = this._size$.asObservable()),
            (this._page$ = new R.X(0)),
            (this.page$ = this._page$.asObservable()),
            (this.visibleApproves$ = this.allApproves$.pipe(
              (0, G.V)(
                this.page$,
                this.size$,
                this.queryForm.valueChanges.pipe((0, we.b)(400))
              ),
              (0, we.b)(0),
              (0, b.U)(([_, W, ne, Qe]) => {
                const fe = Qe.token.split(" ").join(""),
                  Ye = Qe.spender.split(" ").join("");
                if (fe || Ye)
                  return _.filter((oe) => {
                    const ie = oe.spender
                        .toLowerCase()
                        .includes(Ye.toLowerCase()),
                      Rn =
                        oe.token?.symbol
                          .toLowerCase()
                          .includes(fe.toLowerCase()) ||
                        oe.tokenAddress
                          .toLowerCase()
                          .includes(fe.toLowerCase());
                    return ie && Rn;
                  });
                const Ze = W * ne,
                  Bn = Ze + ne;
                return _.filter((oe, ie) => ie >= Ze && ie < Bn);
              }),
              (0, nt.B)()
            )),
            this.visibleApproves$.subscribe();
        }
        set tableLoading(o) {
          this._tableLoading$.next(o);
        }
        set tokenSearchQuery(o) {
          this.queryForm.controls.token.patchValue(o);
        }
        set spenderSearchQuery(o) {
          this.queryForm.controls.spender.patchValue(o);
        }
        set size(o) {
          this._size$.next(o);
        }
        set page(o) {
          this._page$.next(o);
        }
        fetchTransactions(o, t, i) {
          return this.httpService
            .get(
              {
                [d.BLOCKCHAIN_NAME
                  .ETHEREUM]: `https://api.etherscan.io/api?module=account&action=txlist&address=${t}`,
                [d.BLOCKCHAIN_NAME
                  .BINANCE_SMART_CHAIN]: `https://api.bscscan.com/api?module=account&action=txlist&address=${t}`,
                [d.BLOCKCHAIN_NAME
                  .POLYGON]: `https://api.polygonscan.com/api?module=account&action=txlist&address=${t}`,
                [d.BLOCKCHAIN_NAME
                  .ARBITRUM]: `https://api.arbiscan.io/api?module=account&action=txlist&address=${t}`,
                [d.BLOCKCHAIN_NAME
                  .OPTIMISM]: `https://api-optimistic.etherscan.io/api?module=account&action=txlist&address=${t}`,
                [d.BLOCKCHAIN_NAME
                  .FANTOM]: `https://api.ftmscan.com/api?module=account&action=txlist&address=${t}`,
                [d.BLOCKCHAIN_NAME
                  .AVALANCHE]: `https://api.snowtrace.io/api?module=account&action=txlist&address=${t}`,
              }[o.key]
            )
            .pipe(
              (0, b.U)((s) => this.handleScannerResponse(s)),
              (0, it.dY)(() =>
                this.tokensStoreService.tokens$.pipe((0, z.P)(Boolean))
              ),
              (0, S.w)((s) => this.findTokensForApproves(s)),
              (0, S.w)((s) => this.fetchLastAllowance(s, o)),
              (0, b.U)((s) => s.filter((l) => "0" !== l.value)),
              (0, ae.b)(() => this._exceededLimits$.next(!1)),
              (0, ot.K)(
                (s) => (
                  s instanceof Error &&
                    s.message.includes("Exceed limits") &&
                    this._exceededLimits$.next(!0),
                  (0, D.of)([])
                )
              )
            );
        }
        revokeApprove(o, t) {
          var i = this;
          return (0, Y.Z)(function* () {
            const a = i.form.controls.blockchain.value.key,
              s = d.Injector.web3PublicService.getWeb3Public(a);
            let l;
            if (
              (yield s.getAllowance(o, i.walletConnectorService.address, t)).eq(
                0
              )
            )
              throw new d.RubicSdkError(
                "Approve already revoked, token has 0 allowance"
              );
            try {
              const g = at.u[a]
                ? d.Web3Pure.toWei(yield i.gasService.getGasPriceInEthUnits(a))
                : null;
              yield d.Injector.web3PrivateService
                .getWeb3PrivateByBlockchain(a)
                .approveTokens(o, t, new ke.Z(0), {
                  onTransactionHash: (m) => {
                    l = i.showProgressNotification();
                  },
                  ...(g && { gasPrice: g }),
                }),
                i.showSuccessNotification(),
                i._refreshTable$.next(o);
            } catch (g) {
              i.handleError(g);
            } finally {
              l?.unsubscribe();
            }
          })();
        }
        showProgressNotification() {
          return this.notificationsService.show(
            this.translateService.instant("Revoke in progress"),
            { status: "info", autoClose: !1 }
          );
        }
        showSuccessNotification() {
          return this.notificationsService.show("Successful revoke", {
            status: "success",
            autoClose: 1e4,
          });
        }
        handleError(o) {
          if (o instanceof Error) {
            let t, i;
            o instanceof d.UserRejectError
              ? ((t = this.translateService.instant("userReject")),
                (i = "error"))
              : ((t = this.translateService.instant("unknown")),
                (i = "error")),
              this.notificationsService.show(t, { autoClose: 1e4, status: i });
          }
        }
        handleScannerResponse(o) {
          if ("string" == typeof o.result) throw new Error("Exceed limits");
          const t = o.result
              .filter((a) => a?.functionName.includes("approve"))
              .reverse(),
            i = new Map();
          return (
            t.forEach((a) => {
              const s = d.MethodDecoder.decodeMethod(
                  d.ERC20_TOKEN_ABI.find((m) => "approve" === m.name),
                  a.input
                ),
                l = s.params.find((m) => "_spender" === m.name).value,
                u = s.params.find((m) => "_value" === m.name).value,
                g = `${a.to}${l}`;
              i.has(g) ||
                i.set(g, {
                  hash: a.hash,
                  tokenAddress: a.to,
                  spender: l,
                  value: u,
                  timeStamp: 1e3 * a.timeStamp,
                });
            }),
            Array.from(i.values())
          );
        }
        findTokensForApproves(o) {
          const t = o.map((s) => s.tokenAddress),
            a = Array.from(new Set(t)).map((s) =>
              this.tokensService.findToken(
                {
                  address: s,
                  blockchain: this.form.controls.blockchain.value.key,
                },
                !0
              )
            );
          return (0, xe.D)([(0, D.of)(o), Promise.all(a)]).pipe(
            (0, b.U)(([s, l]) =>
              s.map((u) => ({
                ...u,
                token: l.find((g) =>
                  (0, d.compareAddresses)(g?.address, u.tokenAddress)
                ),
              }))
            )
          );
        }
        fetchLastAllowance(o, t) {
          var i = this;
          return (0, Y.Z)(function* () {
            const s = yield d.Injector.web3PublicService
              .getWeb3Public(t.key)
              .multicallContractsMethods(
                d.ERC20_TOKEN_ABI,
                o.map((l) => ({
                  contractAddress: l.tokenAddress,
                  methodsData: [
                    {
                      methodName: "allowance",
                      methodArguments: [
                        i.walletConnectorService.address,
                        l.spender,
                      ],
                    },
                  ],
                }))
              );
            return o.map((l, u) => ({
              ...l,
              value: s[u]?.[0].success ? s[u][0].output : l.value,
            }));
          })();
        }
      }
      (y.ɵfac = function (o) {
        return new (o || y)(
          e.ɵɵinject(j.j),
          e.ɵɵinject(st.eN),
          e.ɵɵinject(e.INJECTOR),
          e.ɵɵinject(ct.RO),
          e.ɵɵinject(J.H),
          e.ɵɵinject(Me.Z),
          e.ɵɵinject(et.T),
          e.ɵɵinject(re.sK),
          e.ɵɵinject(rt.Q)
        );
      }),
        (y.ɵprov = e.ɵɵdefineInjectable({ token: y, factory: y.ɵfac })),
        (0, c.__decorate)(
          [
            (0, Xe.q)({ maxAge: 12e4 }),
            (0, c.__metadata)("design:type", Function),
            (0, c.__metadata)("design:paramtypes", [Object, String, String]),
            (0, c.__metadata)("design:returntype", be.y),
          ],
          y.prototype,
          "fetchTransactions",
          null
        );
      var se = r(82722),
        Se = r(22519),
        Oe = r(32583),
        ce = r(6838),
        f = r(19014),
        Ie = r(55517),
        X = r(35137),
        Ee = r(35302),
        le = r(35640),
        h = r(73442),
        Pe = r(69582),
        x = r(45261),
        k = r(46907),
        T = r(87738),
        N = r(38084),
        w = r(15411),
        lt = r(70589),
        pt = r(52164),
        O = r(84620),
        M = r(35628);
      function dt(n, o) {
        1 & n && e.ɵɵelement(0, "tui-svg", 1),
          2 & n && e.ɵɵproperty("src", o.$implicit);
      }
      const Ae = {
          iconSmall: "tuiIconChevronDown",
          iconLarge: "tuiIconChevronDownLarge",
        },
        pe = new e.InjectionToken("Default parameters for arrow component", {
          factory: () => Ae,
        }),
        de = new e.InjectionToken(
          "Type of icon in dropdowns for interactive or disable mode",
          { factory: () => ({ interactive: q, disabled: q }) }
        ),
        q = new M.Al(
          (() => {
            let n = class {
              constructor(t, i, a) {
                (this.dropdown = t),
                  (this.textfieldSize = i),
                  (this.options = a);
              }
              get arrowIcon() {
                return (0, pt.Bb)(this.textfieldSize.size)
                  ? this.options.iconLarge
                  : this.options.iconSmall;
              }
            };
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(
                  e.ɵɵdirectiveInject(w.o1),
                  e.ɵɵdirectiveInject(k.kI),
                  e.ɵɵdirectiveInject(pe)
                );
              }),
              (n.ɵcmp = e.ɵɵdefineComponent({
                type: n,
                selectors: [["tui-arrow"]],
                decls: 3,
                vars: 5,
                consts: [
                  ["polymorpheus-outlet", "", 1, "t-icon", 3, "content"],
                  [3, "src"],
                ],
                template: function (t, i) {
                  1 & t &&
                    (e.ɵɵelementStart(0, "span", 0),
                    e.ɵɵpipe(1, "async"),
                    e.ɵɵtemplate(2, dt, 1, 1, "ng-template"),
                    e.ɵɵelementEnd()),
                    2 & t &&
                      (e.ɵɵclassProp(
                        "t-icon_rotated",
                        e.ɵɵpipeBind1(1, 3, i.dropdown.openChange)
                      ),
                      e.ɵɵproperty("content", i.arrowIcon));
                },
                dependencies: [O.P, M.r1, p.Ov],
                styles: [
                  ".t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,300ms);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}",
                ],
                changeDetection: 0,
              })),
              (n = (0, c.__decorate)(
                [
                  (0, c.__param)(0, (0, e.Inject)(w.o1)),
                  (0, c.__param)(1, (0, e.Inject)(k.kI)),
                  (0, c.__param)(2, (0, e.Inject)(pe)),
                ],
                n
              )),
              n
            );
          })()
        );
      let gt = (() => {
        let n = class {};
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({ imports: [p.ez, O.E, M.wq] })),
          n
        );
      })();
      var Le = r(72997),
        ue = r(90988),
        mt = r(28634),
        ge = r(14335),
        ht = r(33507),
        vt = r(39193),
        _t = r(82805);
      let ft = (() => {
          let n = class {
            constructor(t, i, a) {
              (this.elementRef = t),
                (this.documentRef = i),
                (this.destroy$ = a);
            }
            set tuiScrollIntoView(t) {
              t &&
                (0, _t.H)(0)
                  .pipe((0, se.R)(this.destroy$))
                  .subscribe(() => {
                    this.elementRef.nativeElement.dispatchEvent(
                      (0, ht.hO)(
                        vt.fe,
                        { bubbles: !0, detail: this.elementRef.nativeElement },
                        this.documentRef
                      )
                    );
                  });
            }
          };
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵdirectiveInject(e.ElementRef),
                e.ɵɵdirectiveInject(p.K0),
                e.ɵɵdirectiveInject(f.a3)
              );
            }),
            (n.ɵdir = e.ɵɵdefineDirective({
              type: n,
              selectors: [["", "tuiScrollIntoView", ""]],
              inputs: { tuiScrollIntoView: "tuiScrollIntoView" },
              features: [e.ɵɵProvidersFeature([f.a3])],
            })),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.NH)()],
              n.prototype,
              "tuiScrollIntoView",
              null
            ),
            (n = (0, c.__decorate)(
              [
                (0, c.__param)(0, (0, e.Inject)(e.ElementRef)),
                (0, c.__param)(1, (0, e.Inject)(p.K0)),
                (0, c.__param)(2, (0, e.Inject)(f.a3)),
              ],
              n
            )),
            n
          );
        })(),
        Ct = (() => {
          let n = class {};
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({})),
            n
          );
        })();
      var Be = r(56451),
        yt = r(60515);
      function xt(n, o) {
        1 & n && e.ɵɵelementContainer(0);
      }
      function bt(n, o) {
        1 & n && e.ɵɵelement(0, "tui-svg", 3),
          2 & n && e.ɵɵproperty("tuiScrollIntoView", !0);
      }
      function kt(n, o) {
        1 & n && e.ɵɵelement(0, "span", 4);
      }
      const wt = new M.Al(
        (() => {
          let n = class {
            constructor(t, i, a, s, l) {
              var u;
              (this.context = t),
                (this.host = i),
                (this.elementRef = a),
                (this.option = s),
                (this.control = l),
                (this.selected$ = (0, Be.T)(
                  null !== (u = this.control.valueChanges) && void 0 !== u
                    ? u
                    : yt.E,
                  (0, ue.eh)(this.elementRef.nativeElement, "animationstart")
                ).pipe(
                  (0, Z.O)(null),
                  (0, b.U)(() => this.selected),
                  (0, Te.x)()
                ));
            }
            get matcher() {
              return this.host.identityMatcher || mt.bg;
            }
            ngOnInit() {
              (0, ge.EN)(this.option.value) &&
                this.host.checkOption &&
                this.host.checkOption(this.option.value);
            }
            get selected() {
              return (
                (0, ge.EN)(this.option.value) &&
                (0, ge.EN)(this.control.value) &&
                this.matcher(this.control.value, this.option.value)
              );
            }
          };
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵdirectiveInject(M.yf),
                e.ɵɵdirectiveInject(x.N1),
                e.ɵɵdirectiveInject(e.ElementRef),
                e.ɵɵdirectiveInject(T.vK),
                e.ɵɵdirectiveInject(v.NgControl)
              );
            }),
            (n.ɵcmp = e.ɵɵdefineComponent({
              type: n,
              selectors: [["tui-select-option"]],
              decls: 5,
              vars: 5,
              consts: [
                [4, "ngTemplateOutlet"],
                [
                  "automation-id",
                  "tui-select-option__checkmark",
                  "src",
                  "tuiIconCheckLarge",
                  "class",
                  "checkmark",
                  3,
                  "tuiScrollIntoView",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["dummy", ""],
                [
                  "automation-id",
                  "tui-select-option__checkmark",
                  "src",
                  "tuiIconCheckLarge",
                  1,
                  "checkmark",
                  3,
                  "tuiScrollIntoView",
                ],
                [1, "dummy"],
              ],
              template: function (t, i) {
                if (
                  (1 & t &&
                    (e.ɵɵtemplate(0, xt, 1, 0, "ng-container", 0),
                    e.ɵɵtemplate(1, bt, 1, 1, "tui-svg", 1),
                    e.ɵɵpipe(2, "async"),
                    e.ɵɵtemplate(
                      3,
                      kt,
                      1,
                      0,
                      "ng-template",
                      null,
                      2,
                      e.ɵɵtemplateRefExtractor
                    )),
                  2 & t)
                ) {
                  const a = e.ɵɵreference(4);
                  e.ɵɵproperty("ngTemplateOutlet", i.context.$implicit),
                    e.ɵɵadvance(1),
                    e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 3, i.selected$))(
                      "ngIfElse",
                      a
                    );
                }
              },
              dependencies: [p.O5, p.tP, O.P, ft, p.Ov],
              styles: [
                "@-webkit-keyframes _ngcontent-%COMP%_retrigger{from{left:1px}to{left:2px}}@keyframes _ngcontent-%COMP%_retrigger{from{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;-webkit-animation:1s _ngcontent-%COMP%_retrigger;animation:1s _ngcontent-%COMP%_retrigger}.checkmark[_ngcontent-%COMP%]{margin:0 -.375rem 0 auto;border-left:5px solid transparent}.dummy[_ngcontent-%COMP%]{width:1.5rem}",
              ],
              changeDetection: 0,
            })),
            (n = (0, c.__decorate)(
              [
                (0, c.__param)(0, (0, e.Inject)(M.yf)),
                (0, c.__param)(1, (0, e.Inject)(x.N1)),
                (0, c.__param)(2, (0, e.Inject)(e.ElementRef)),
                (0, c.__param)(3, (0, e.Inject)(T.vK)),
                (0, c.__param)(4, (0, e.Inject)(v.NgControl)),
              ],
              n
            )),
            n
          );
        })()
      );
      let Mt = (() => {
        let n = class {};
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({ imports: [p.ez, O.E, Ct] })),
          n
        );
      })();
      var St = r(66563);
      function Ot(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 4), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(t);
        }
      }
      function It(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 3),
            e.ɵɵtemplate(1, Ot, 2, 1, "ng-template"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("content", t.computedContent)(
            "context",
            t.computeContext(t.value, t.computedFocused)
          );
        }
      }
      const Et = ["*", [["input"]]],
        Pt = ["*", "input"],
        At = wt,
        Lt = [
          { provide: Ee.M$, useExisting: (0, e.forwardRef)(() => ee) },
          { provide: X.KZ, useExisting: (0, e.forwardRef)(() => ee) },
          { provide: x.N1, useExisting: (0, e.forwardRef)(() => ee) },
          { provide: x.IQ, useValue: At },
          St.yn,
        ],
        Re = { valueContent: "" },
        me = new e.InjectionToken("Default parameters for select component", {
          factory: () => Re,
        });
      let ee = (() => {
        let n = class extends Ee.F9 {
          constructor(t, i, a, s, l, u) {
            super(t, i),
              (this.textfieldCleaner = a),
              (this.arrowMode = s),
              (this.itemsHandlers = l),
              (this.options = u),
              (this.stringify = this.itemsHandlers.stringify),
              (this.identityMatcher = this.itemsHandlers.identityMatcher),
              (this.valueContent = this.options.valueContent),
              (this.datalist = "");
          }
          get arrow() {
            return this.interactive
              ? this.arrowMode.interactive
              : this.arrowMode.disabled;
          }
          get nativeFocusableElement() {
            return this.textfield
              ? this.textfield.nativeFocusableElement
              : null;
          }
          get focused() {
            return (
              (0, le.zV)(this.nativeFocusableElement) ||
              (!!this.hostedDropdown && this.hostedDropdown.focused)
            );
          }
          get computedValue() {
            return null === this.value ? "" : this.stringify(this.value) || " ";
          }
          get computedContent() {
            return this.valueContent || this.computedValue;
          }
          computeContext(t, i) {
            return { $implicit: t, active: i };
          }
          onValueChange(t) {
            t || this.updateValue(null);
          }
          onActiveZone(t) {
            this.updateFocused(t);
          }
          onHovered(t) {
            this.updateHovered(t);
          }
          onKeyDownDelete() {
            this.textfieldCleaner.cleaner && this.updateValue(null);
          }
          handleOption(t) {
            var i;
            this.focusInput(),
              this.updateValue(t),
              null === (i = this.hostedDropdown) ||
                void 0 === i ||
                i.updateOpen(!1);
          }
          focusInput(t = !1) {
            this.nativeFocusableElement &&
              (0, le.NY)(this.nativeFocusableElement, !0, t);
          }
        };
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(v.NgControl, 10),
              e.ɵɵdirectiveInject(e.ChangeDetectorRef),
              e.ɵɵdirectiveInject(k.Ym),
              e.ɵɵdirectiveInject(de),
              e.ɵɵdirectiveInject(Le.Ys),
              e.ɵɵdirectiveInject(me)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["tui-select"]],
            contentQueries: function (t, i, a) {
              if (
                (1 & t && e.ɵɵcontentQuery(a, T.gX, 5, e.TemplateRef), 2 & t)
              ) {
                let s;
                e.ɵɵqueryRefresh((s = e.ɵɵloadQuery())) &&
                  (i.datalist = s.first);
              }
            },
            viewQuery: function (t, i) {
              if (
                (1 & t && (e.ɵɵviewQuery(N.yc, 5), e.ɵɵviewQuery(w.o1, 5)),
                2 & t)
              ) {
                let a;
                e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                  (i.textfield = a.first),
                  e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                    (i.hostedDropdown = a.first);
              }
            },
            inputs: {
              stringify: "stringify",
              identityMatcher: "identityMatcher",
              valueContent: "valueContent",
            },
            features: [e.ɵɵProvidersFeature(Lt), e.ɵɵInheritDefinitionFeature],
            ngContentSelectors: Pt,
            decls: 5,
            vars: 13,
            consts: [
              [1, "t-hosted", 3, "canOpen", "content", "tuiActiveZoneChange"],
              [
                "automation-id",
                "tui-select__textfield",
                1,
                "t-textfield",
                3,
                "editable",
                "pseudoFocused",
                "pseudoHovered",
                "invalid",
                "nativeId",
                "readOnly",
                "iconContent",
                "disabled",
                "focusable",
                "value",
                "valueChange",
                "hoveredChange",
                "keydown.delete.prevent",
                "keydown.backspace.prevent",
              ],
              [
                "polymorpheus-outlet",
                "",
                "automation-id",
                "tui-select__value",
                "class",
                "t-value",
                3,
                "content",
                "context",
                4,
                "ngIf",
              ],
              [
                "polymorpheus-outlet",
                "",
                "automation-id",
                "tui-select__value",
                1,
                "t-value",
                3,
                "content",
                "context",
              ],
              [1, "t-primitive-value"],
            ],
            template: function (t, i) {
              1 & t &&
                (e.ɵɵprojectionDef(Et),
                e.ɵɵelementStart(0, "tui-hosted-dropdown", 0),
                e.ɵɵlistener("tuiActiveZoneChange", function (s) {
                  return i.onActiveZone(s);
                }),
                e.ɵɵelementStart(1, "tui-primitive-textfield", 1),
                e.ɵɵlistener("valueChange", function (s) {
                  return i.onValueChange(s);
                })("hoveredChange", function (s) {
                  return i.onHovered(s);
                })("keydown.delete.prevent", function () {
                  return i.onKeyDownDelete();
                })("keydown.backspace.prevent", function () {
                  return i.onKeyDownDelete();
                }),
                e.ɵɵprojection(2),
                e.ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]),
                e.ɵɵtemplate(4, It, 2, 2, "div", 2),
                e.ɵɵelementEnd()()),
                2 & t &&
                  (e.ɵɵproperty("canOpen", i.interactive)(
                    "content",
                    i.datalist || ""
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("editable", !1)(
                    "pseudoFocused",
                    i.computedFocused
                  )("pseudoHovered", i.computedHovered)(
                    "invalid",
                    i.computedInvalid
                  )("nativeId", i.nativeId)("readOnly", i.readOnly)(
                    "iconContent",
                    i.arrow
                  )("disabled", i.computedDisabled)(
                    "focusable",
                    i.computedFocusable
                  )("value", i.computedValue),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", null !== i.value));
            },
            dependencies: [p.O5, M.r1, Pe.e, N.yc, N.B1, w.o1],
            styles: [
              "[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
            ],
            changeDetection: 0,
          })),
          (0, c.__decorate)(
            [(0, e.ViewChild)(N.yc)],
            n.prototype,
            "textfield",
            void 0
          ),
          (0, c.__decorate)(
            [(0, e.ViewChild)(w.o1)],
            n.prototype,
            "hostedDropdown",
            void 0
          ),
          (0, c.__decorate)(
            [(0, e.Input)(), (0, h.TH)()],
            n.prototype,
            "stringify",
            void 0
          ),
          (0, c.__decorate)(
            [(0, e.Input)(), (0, h.TH)()],
            n.prototype,
            "identityMatcher",
            void 0
          ),
          (0, c.__decorate)(
            [(0, e.Input)(), (0, h.TH)()],
            n.prototype,
            "valueContent",
            void 0
          ),
          (0, c.__decorate)(
            [(0, e.ContentChild)(T.gX, { read: e.TemplateRef })],
            n.prototype,
            "datalist",
            void 0
          ),
          (0, c.__decorate)([h.UM], n.prototype, "computeContext", null),
          (n = (0, c.__decorate)(
            [
              (0, c.__param)(0, (0, e.Optional)()),
              (0, c.__param)(0, (0, e.Self)()),
              (0, c.__param)(0, (0, e.Inject)(v.NgControl)),
              (0, c.__param)(1, (0, e.Inject)(e.ChangeDetectorRef)),
              (0, c.__param)(2, (0, e.Inject)(k.Ym)),
              (0, c.__param)(3, (0, e.Inject)(de)),
              (0, c.__param)(4, (0, e.Inject)(Le.Ys)),
              (0, c.__param)(5, (0, e.Inject)(me)),
            ],
            n
          )),
          n
        );
      })();
      var De;
      let I = (De = class extends lt.dh {
        get readOnly() {
          return !0;
        }
        get value() {
          return this.host.computedValue;
        }
        onValueChange(o) {
          this.host.onValueChange(o);
        }
      });
      (I.ɵfac = (function () {
        let n;
        return function (t) {
          return (n || (n = e.ɵɵgetInheritedFactory(I)))(t || I);
        };
      })()),
        (I.ɵdir = e.ɵɵdefineDirective({
          type: I,
          selectors: [["tui-select"]],
          features: [
            e.ɵɵProvidersFeature([
              { provide: x.S0, useExisting: (0, e.forwardRef)(() => De) },
            ]),
            e.ɵɵInheritDefinitionFeature,
          ],
        }));
      let Bt = (() => {
        let n = class {};
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [p.ez, M.wq, Pe.A, N.KW, w.jh, Mt, gt],
          })),
          n
        );
      })();
      var je = r(50284);
      function Rt(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tui-data-list-wrapper", 4), 2 & n)) {
          const t = e.ɵɵnextContext(),
            i = e.ɵɵreference(5);
          e.ɵɵproperty("items", t.supportedBlockchains)("itemContent", i);
        }
      }
      function Dt(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 5),
            e.ɵɵelement(1, "img", 6),
            e.ɵɵtext(2),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = o.$implicit;
          e.ɵɵadvance(1),
            e.ɵɵproperty("src", t.img, e.ɵɵsanitizeUrl)("alt", t.name),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", t.name, " ");
        }
      }
      class $ {
        constructor(o, t) {
          (this.approveScannerService = o),
            (this.isMobile = t),
            (this.form = this.approveScannerService.form),
            (this.supportedBlockchains =
              this.approveScannerService.supportedBlockchains);
        }
      }
      ($.ɵfac = function (o) {
        return new (o || $)(e.ɵɵdirectiveInject(y), e.ɵɵdirectiveInject(X.fL));
      }),
        ($.ɵcmp = e.ɵɵdefineComponent({
          type: $,
          selectors: [["app-form"]],
          features: [e.ɵɵProvidersFeature([f.a3])],
          decls: 6,
          vars: 4,
          consts: [
            [3, "formGroup"],
            [
              "formControlName",
              "blockchain",
              3,
              "tuiTextfieldSize",
              "tuiTextfieldLabelOutside",
              "valueContent",
            ],
            ["size", "s", 3, "items", "itemContent", 4, "tuiDataList"],
            ["blockchainContent", ""],
            ["size", "s", 3, "items", "itemContent"],
            [1, "selector-row"],
            [3, "src", "alt"],
          ],
          template: function (o, t) {
            if (
              (1 & o &&
                (e.ɵɵelementStart(0, "form", 0)(1, "tui-select", 1),
                e.ɵɵtext(2, " Choose a blockchain "),
                e.ɵɵtemplate(3, Rt, 1, 2, "tui-data-list-wrapper", 2),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(
                  4,
                  Dt,
                  3,
                  3,
                  "ng-template",
                  null,
                  3,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd()),
              2 & o)
            ) {
              const i = e.ɵɵreference(5);
              e.ɵɵproperty("formGroup", t.form),
                e.ɵɵadvance(1),
                e.ɵɵproperty("tuiTextfieldSize", t.isMobile ? "s" : "m")(
                  "tuiTextfieldLabelOutside",
                  !0
                )("valueContent", i);
            }
          },
          dependencies: [
            v.ɵNgNoValidate,
            v.NgControlStatus,
            v.NgControlStatusGroup,
            v.FormGroupDirective,
            v.FormControlName,
            ee,
            I,
            k.xT,
            k.sz,
            je.eC,
            T.gX,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}form[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;justify-content:center}@media (max-width: 500px){form[_ngcontent-%COMP%]{flex-direction:column}}form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.selector-row[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px}.selector-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px;margin-right:10px}",
          ],
          changeDetection: 0,
        }));
      var jt = r(2830),
        zt = r(83905),
        Nt = r(49808),
        ze = r(16887);
      new e.InjectionToken("tui-reorder i18n button", {
        factory: (0, ze.Ho)("showHideText"),
      });
      const Ne = new e.InjectionToken("tui-table-pagination i18n texts", {
        factory: (0, ze.Ho)("paginationTexts"),
      });
      var he,
        te = r(46693),
        $t = r(95385),
        $e = r(69718);
      function Ft(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tui-svg", 3), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("src", t.icon);
        }
      }
      function Ht(n, o) {
        if ((1 & n && e.ɵɵelement(0, "tui-svg", 4), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("src", t.icon);
        }
      }
      let C = (he = class {
        constructor(o, t, i) {
          (this.elementRef = o),
            (this.mode$ = t),
            (this.pseudo = !1),
            (this.icon = null),
            (this.iconAlign = "right"),
            (this.iconRotated = !1),
            (this.mode = null),
            (this.focusVisible = !1),
            (this.focusedChange = (0, Be.T)(
              (0, ue.eh)(this.elementRef.nativeElement, "focusin").pipe(
                (0, $e.h)(!0)
              ),
              (0, ue.eh)(this.elementRef.nativeElement, "focusout").pipe(
                (0, $e.h)(!1)
              )
            )),
            i.subscribe((a) => {
              this.focusVisible = a;
            });
        }
        get nativeFocusableElement() {
          return this.elementRef.nativeElement;
        }
        get focused() {
          return (0, le.zV)(this.nativeFocusableElement);
        }
        get hasIcon() {
          return null !== this.icon;
        }
        get iconAlignLeft() {
          return this.hasIcon && "left" === this.iconAlign;
        }
        get iconAlignRight() {
          return this.hasIcon && "right" === this.iconAlign;
        }
      });
      (C.ɵfac = function (o) {
        return new (o || C)(
          e.ɵɵdirectiveInject(e.ElementRef),
          e.ɵɵdirectiveInject(x.Au),
          e.ɵɵdirectiveInject(f.ku)
        );
      }),
        (C.ɵcmp = e.ɵɵdefineComponent({
          type: C,
          selectors: [
            ["a", "tuiLink", ""],
            ["button", "tuiLink", ""],
          ],
          hostVars: 7,
          hostBindings: function (o, t) {
            1 & o &&
              e.ɵɵlistener("$.data-mode.attr", function () {
                return t.mode$;
              }),
              2 & o &&
                (e.ɵɵattribute("data-host-mode", t.mode),
                e.ɵɵclassProp("_pseudo", t.pseudo)(
                  "_icon-rotated",
                  t.iconRotated
                )("_focus-visible", t.focusVisible));
          },
          inputs: {
            pseudo: "pseudo",
            icon: "icon",
            iconAlign: "iconAlign",
            iconRotated: "iconRotated",
            mode: "mode",
          },
          exportAs: ["tuiLink"],
          features: [
            e.ɵɵProvidersFeature([
              { provide: X.KZ, useExisting: (0, e.forwardRef)(() => he) },
              f.ku,
              f.a3,
              $t.CV,
            ]),
          ],
          attrs: ["tuiLink", ""],
          ngContentSelectors: ["*"],
          decls: 4,
          vars: 2,
          consts: [
            ["class", "t-icon t-icon_left", 3, "src", 4, "ngIf"],
            [1, "t-content"],
            ["class", "t-icon t-icon_right", 3, "src", 4, "ngIf"],
            [1, "t-icon", "t-icon_left", 3, "src"],
            [1, "t-icon", "t-icon_right", 3, "src"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵprojectionDef(),
              e.ɵɵtemplate(0, Ft, 1, 1, "tui-svg", 0),
              e.ɵɵelementStart(1, "span", 1),
              e.ɵɵprojection(2),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(3, Ht, 1, 1, "tui-svg", 2)),
              2 & o &&
                (e.ɵɵproperty("ngIf", t.iconAlignLeft),
                e.ɵɵadvance(3),
                e.ɵɵproperty("ngIf", t.iconAlignRight));
          },
          dependencies: [p.O5, O.P],
          styles: [
            "[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:0 0;font-size:inherit;line-height:inherit;transition-property:color;transition-duration:var(--tui-duration,300ms);transition-timing-function:ease-in-out;color:var(--tui-link);text-decoration:none;text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:0}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight]._active[_nghost-%COMP%], [data-mode=onLight][_nghost-%COMP%]:hover{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo._active[_nghost-%COMP%], [data-mode=onLight]._pseudo[_nghost-%COMP%]:hover{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%], [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark]._active[_nghost-%COMP%], [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark][_nghost-%COMP%]:hover{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo._active[_nghost-%COMP%], [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo[_nghost-%COMP%]:hover{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%], [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}.t-content[_ngcontent-%COMP%]{display:inline-block}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed;text-decoration:underline dashed;text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,300ms);transition-timing-function:ease-in-out;margin-top:-.125rem;opacity:.8}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._hovered[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{opacity:1}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}",
          ],
          changeDetection: 0,
        })),
        (C.ctorParameters = () => [
          {
            type: e.ElementRef,
            decorators: [{ type: e.Inject, args: [e.ElementRef] }],
          },
          { type: be.y, decorators: [{ type: e.Inject, args: [x.Au] }] },
          { type: f.ku, decorators: [{ type: e.Inject, args: [f.ku] }] },
        ]),
        (0, c.__decorate)(
          [(0, e.Input)(), (0, e.HostBinding)("class._pseudo"), (0, h.TH)()],
          C.prototype,
          "pseudo",
          void 0
        ),
        (0, c.__decorate)(
          [(0, e.Input)(), (0, h.TH)()],
          C.prototype,
          "icon",
          void 0
        ),
        (0, c.__decorate)(
          [(0, e.Input)(), (0, h.TH)()],
          C.prototype,
          "iconAlign",
          void 0
        ),
        (0, c.__decorate)(
          [
            (0, e.Input)(),
            (0, e.HostBinding)("class._icon-rotated"),
            (0, h.TH)(),
          ],
          C.prototype,
          "iconRotated",
          void 0
        ),
        (0, c.__decorate)(
          [
            (0, e.Input)(),
            (0, e.HostBinding)("attr.data-host-mode"),
            (0, h.TH)(),
          ],
          C.prototype,
          "mode",
          void 0
        ),
        (0, c.__decorate)(
          [(0, e.HostBinding)("class._focus-visible")],
          C.prototype,
          "focusVisible",
          void 0
        ),
        (C = he =
          (0, c.__decorate)(
            [
              (0, c.__param)(0, (0, e.Inject)(e.ElementRef)),
              (0, c.__param)(1, (0, e.Inject)(x.Au)),
              (0, c.__param)(2, (0, e.Inject)(f.ku)),
            ],
            C
          ));
      let Kt = (() => {
        let n = class {};
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({ imports: [p.ez, O.E] })),
          n
        );
      })();
      function Wt(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 8),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext().$implicit,
                s = e.ɵɵnextContext(3);
              return e.ɵɵresetView(s.onItem(a));
            }),
            e.ɵɵtext(1),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1(" ", t, " ");
        }
      }
      function Qt(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Wt, 2, 1, "button", 7),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.$implicit,
            i = e.ɵɵnextContext(3);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", t !== i.size);
        }
      }
      function Yt(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "tui-data-list"),
            e.ɵɵtemplate(1, Qt, 2, 1, "ng-container", 6),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", t.items);
        }
      }
      function Zt(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "button", 9),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.back());
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(2, "button", 10),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.forth());
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = o.ngIf,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", i.leftDisabled)("title", t[0]),
            e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", i.rightDisabled)("title", t[1]);
        }
      }
      function Gt(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 1),
            e.ɵɵtext(2),
            e.ɵɵelementStart(3, "strong", 2),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(5, "span"),
            e.ɵɵtext(6),
            e.ɵɵelementStart(7, "tui-hosted-dropdown", 3),
            e.ɵɵlistener("openChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView((s.open = a));
            }),
            e.ɵɵelementStart(8, "button", 4)(9, "strong"),
            e.ɵɵtext(10),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(
              11,
              Yt,
              2,
              1,
              "ng-template",
              null,
              5,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd(),
            e.ɵɵtext(13),
            e.ɵɵelementStart(14, "strong", 2),
            e.ɵɵtext(15),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(16, Zt, 3, 4, "ng-container", 0),
            e.ɵɵpipe(17, "async"),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = o.ngIf,
            i = e.ɵɵreference(12),
            a = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" ", t.pages, " "),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(a.pages),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" ", t.linesPerPage, " "),
            e.ɵɵadvance(1),
            e.ɵɵproperty("content", i)("open", a.open),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2("", a.start + 1, "\u2013", a.end, ""),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(" ", t.of, " "),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(a.total),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(17, 10, a.spinTexts$));
        }
      }
      let Jt = (() => {
          let n = class {
            constructor(t, i) {
              (this.spinTexts$ = t),
                (this.texts$ = i),
                (this.items = [10, 20, 50, 100]),
                (this.total = 0),
                (this.page = 0),
                (this.size = this.items[0]),
                (this.pageChange = new e.EventEmitter()),
                (this.sizeChange = new e.EventEmitter()),
                (this.open = !1);
            }
            get pages() {
              return Math.ceil(this.total / this.size);
            }
            get start() {
              return this.page * this.size;
            }
            get end() {
              return Math.min(this.start + this.size, this.total);
            }
            get leftDisabled() {
              return !this.start;
            }
            get rightDisabled() {
              return this.end === this.total;
            }
            onItem(t) {
              const { start: i } = this;
              (this.size = t),
                this.sizeChange.emit(t),
                (this.open = !1),
                (this.page = Math.floor(i / this.size)),
                this.pageChange.emit(this.page);
            }
            back() {
              this.page--, this.pageChange.emit(this.page);
            }
            forth() {
              this.page++, this.pageChange.emit(this.page);
            }
          };
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵdirectiveInject(x.U4),
                e.ɵɵdirectiveInject(Ne)
              );
            }),
            (n.ɵcmp = e.ɵɵdefineComponent({
              type: n,
              selectors: [["tui-table-pagination"]],
              inputs: {
                items: "items",
                total: "total",
                page: "page",
                size: "size",
              },
              outputs: { pageChange: "pageChange", sizeChange: "sizeChange" },
              decls: 2,
              vars: 3,
              consts: [
                [4, "ngIf"],
                [1, "pages"],
                [1, "strong"],
                [3, "content", "open", "openChange"],
                ["tuiLink", ""],
                ["content", ""],
                [4, "ngFor", "ngForOf"],
                [
                  "tuiOption",
                  "",
                  "size",
                  "s",
                  "class",
                  "item",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                ["tuiOption", "", "size", "s", 1, "item", 3, "click"],
                [
                  "tuiIconButton",
                  "",
                  "type",
                  "button",
                  "size",
                  "xs",
                  "appearance",
                  "icon",
                  "icon",
                  "tuiIconChevronLeft",
                  1,
                  "tui-space_left-6",
                  "tui-space_right-1",
                  3,
                  "disabled",
                  "title",
                  "click",
                ],
                [
                  "tuiIconButton",
                  "",
                  "type",
                  "button",
                  "size",
                  "xs",
                  "appearance",
                  "icon",
                  "icon",
                  "tuiIconChevronRight",
                  3,
                  "disabled",
                  "title",
                  "click",
                ],
              ],
              template: function (t, i) {
                1 & t &&
                  (e.ɵɵtemplate(0, Gt, 18, 12, "ng-container", 0),
                  e.ɵɵpipe(1, "async")),
                  2 & t && e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 1, i.texts$));
              },
              dependencies: [p.sg, p.O5, te.v0, C, w.o1, T.qi, T.vK, p.Ov],
              styles: [
                "[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.pages[_ngcontent-%COMP%]{margin-right:auto}.item[_ngcontent-%COMP%]{width:5.5rem;box-sizing:border-box}",
              ],
            })),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.TH)()],
              n.prototype,
              "items",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.TH)()],
              n.prototype,
              "total",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.TH)()],
              n.prototype,
              "page",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.TH)()],
              n.prototype,
              "size",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.Output)()],
              n.prototype,
              "pageChange",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.Output)()],
              n.prototype,
              "sizeChange",
              void 0
            ),
            (n = (0, c.__decorate)(
              [
                (0, c.__param)(0, (0, e.Inject)(x.U4)),
                (0, c.__param)(1, (0, e.Inject)(Ne)),
              ],
              n
            )),
            n
          );
        })(),
        Xt = (() => {
          let n = class {};
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({
              imports: [p.ez, te.fN, Kt, w.jh, T.pc],
            })),
            n
          );
        })();
      var Ve = r(22079),
        Fe = r(37251),
        ve = r(33112),
        _e = r(25635),
        He = r(50665),
        Ue = r(67795);
      class E {
        constructor(o) {
          (this.cdr = o),
            (this.handleRevoke = new e.EventEmitter()),
            (this.revokeLoading = !1);
        }
        revoke() {
          (this.revokeLoading = !0),
            this.handleRevoke.emit(() => {
              (this.revokeLoading = !1), this.cdr.detectChanges();
            });
        }
      }
      (E.ɵfac = function (o) {
        return new (o || E)(e.ɵɵdirectiveInject(e.ChangeDetectorRef));
      }),
        (E.ɵcmp = e.ɵɵdefineComponent({
          type: E,
          selectors: [["app-revoke-button"]],
          outputs: { handleRevoke: "handleRevoke" },
          decls: 2,
          vars: 1,
          consts: [
            [
              "tuiButton",
              "",
              "type",
              "button",
              "appearance",
              "primary",
              "size",
              "s",
              1,
              "tui-space_right-3",
              "tui-space_bottom-3",
              3,
              "showLoader",
              "click",
            ],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵelementStart(0, "button", 0),
              e.ɵɵlistener("click", function () {
                return t.revoke();
              }),
              e.ɵɵtext(1, " Revoke Allowance\n"),
              e.ɵɵelementEnd()),
              2 & o && e.ɵɵproperty("showLoader", t.revokeLoading);
          },
          dependencies: [te.v0],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{display:flex;min-width:150px;height:32px}[_nghost-%COMP%]     button{width:100%;height:100%;margin:0}[_nghost-%COMP%]     button .wrapper{min-width:150px;height:100%;margin:0!important;padding:0 .25rem!important;border-radius:50px}@media (max-width: 599px){[_nghost-%COMP%]     button .wrapper{min-width:120px}[_nghost-%COMP%]     button .wrapper .content{font-size:12px!important}}[_nghost-%COMP%]     button .wrapper .content{font-size:16px}",
          ],
          changeDetection: 0,
        }));
      var qt = r(68031);
      class P {
        constructor(o) {
          (this.cdr = o),
            (this.handleSwitch = new e.EventEmitter()),
            (this.switchLoading = !1);
        }
        changeNetwork() {
          (this.switchLoading = !0),
            this.handleSwitch.emit(() => {
              (this.switchLoading = !1), this.cdr.detectChanges();
            });
        }
      }
      (P.ɵfac = function (o) {
        return new (o || P)(e.ɵɵdirectiveInject(e.ChangeDetectorRef));
      }),
        (P.ɵcmp = e.ɵɵdefineComponent({
          type: P,
          selectors: [["app-switch-button"]],
          outputs: { handleSwitch: "handleSwitch" },
          decls: 2,
          vars: 3,
          consts: [
            [
              "appearance",
              "primary",
              "size",
              "s",
              3,
              "loading",
              "disabled",
              "onClick",
            ],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵelementStart(0, "app-rubic-button", 0),
              e.ɵɵlistener("onClick", function () {
                return t.changeNetwork();
              }),
              e.ɵɵtext(1, "Switch Network\n"),
              e.ɵɵelementEnd()),
              2 & o &&
                (e.ɵɵproperty("loading", t.switchLoading)(
                  "disabled",
                  t.switchLoading
                ),
                e.ɵɵattribute("error", !0));
          },
          dependencies: [qt.j],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{--tui-height-s: 32px;display:flex;min-width:150px;height:32px}@media (max-width: 599px){[_nghost-%COMP%]     app-rubic-button{width:auto}}[_nghost-%COMP%]     app-rubic-button tui-loader{height:100%}[_nghost-%COMP%]     button{width:100%!important;height:100%!important;margin:0!important}@media (max-width: 599px){[_nghost-%COMP%]     button .wrapper{min-width:120px}[_nghost-%COMP%]     button .wrapper .content{font-size:12px}}",
          ],
          changeDetection: 0,
        }));
      var Ke = r(21713),
        We = r(27194);
      function en(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1(" ", t.token.symbol, " ");
        }
      }
      function tn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "shortAddress"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind3(2, 1, t.tokenAddress, 3, 3));
        }
      }
      function nn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span", 18), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.value);
        }
      }
      function on(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-switch-button", 19),
            e.ɵɵlistener("handleSwitch", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.changeNetwork(a));
            }),
            e.ɵɵelementEnd();
        }
      }
      function an(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-revoke-button", 20),
            e.ɵɵlistener("handleRevoke", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext().$implicit,
                l = e.ɵɵnextContext();
              return e.ɵɵresetView(
                l.handleRevoke(s.tokenAddress, s.spender, a)
              );
            }),
            e.ɵɵelementEnd();
        }
      }
      function rn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 8)(3, "a", 9),
            e.ɵɵpipe(4, "scannerLink"),
            e.ɵɵelementStart(5, "img", 10),
            e.ɵɵlistener("error", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.onImageError(a));
            }),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(6, en, 2, 1, "ng-container", 11),
            e.ɵɵtemplate(
              7,
              tn,
              3,
              5,
              "ng-template",
              null,
              12,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelement(9, "img", 13),
            e.ɵɵpipe(10, "translate"),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(11, "td")(12, "div", 8)(13, "a", 9),
            e.ɵɵpipe(14, "scannerLink"),
            e.ɵɵtext(15),
            e.ɵɵpipe(16, "shortAddress"),
            e.ɵɵelement(17, "img", 13),
            e.ɵɵpipe(18, "translate"),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(19, "td")(20, "div", 14),
            e.ɵɵtext(21),
            e.ɵɵpipe(22, "shortAddress"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(
              23,
              nn,
              2,
              1,
              "ng-template",
              null,
              15,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(25, "td"),
            e.ɵɵtext(26),
            e.ɵɵpipe(27, "date"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(28, "td"),
            e.ɵɵtemplate(29, on, 1, 0, "app-switch-button", 16),
            e.ɵɵtemplate(
              30,
              an,
              1,
              0,
              "ng-template",
              null,
              17,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = o.$implicit,
            i = e.ɵɵreference(8),
            a = e.ɵɵreference(24),
            s = e.ɵɵreference(31),
            l = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty(
              "safetyLink",
              e.ɵɵpipeBind3(
                4,
                16,
                t.tokenAddress,
                l.selectedBlockchain,
                l.ADDRESS_TYPE.TOKEN
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "src",
              (null == t || null == t.token ? null : t.token.image) ||
                l.defaultTokenImage,
              e.ɵɵsanitizeUrl
            )(
              "alt",
              (null == t || null == t.token ? null : t.token.symbol) ||
                t.tokenAddress
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.token)("ngIfElse", i),
            e.ɵɵadvance(3),
            e.ɵɵproperty("alt", e.ɵɵpipeBind1(10, 20, "checkOnScanner")),
            e.ɵɵadvance(4),
            e.ɵɵproperty(
              "safetyLink",
              e.ɵɵpipeBind3(
                14,
                22,
                t.spender,
                l.selectedBlockchain,
                l.ADDRESS_TYPE.WALLET
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind3(16, 26, t.spender, 5, 3),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("alt", e.ɵɵpipeBind1(18, 30, "checkOnScanner")),
            e.ɵɵadvance(3),
            e.ɵɵproperty("tuiHint", "Unlimited" === t.value ? null : a)(
              "tuiHintShowDelay",
              50
            )("tuiHintHideDelay", 100),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              "Unlimited" === t.value
                ? "Unlimited"
                : e.ɵɵpipeBind3(22, 32, t.value, 10, 5),
              " "
            ),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(27, 36, t.timeStamp, "MMM dd, yyyy h:mm")
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", l.allowChangeBlockchain)("ngIfElse", s);
        }
      }
      class V {
        constructor(o) {
          (this.tokensService = o),
            (this.handleNetworkChange = new e.EventEmitter()),
            (this.handleRevokeCall = new e.EventEmitter()),
            (this.assetMaskConfig = {
              guide: !1,
              mask: (t) =>
                Array.from(t).map(() => new RegExp("^[A-Za-z0-9]+$")),
            }),
            (this.spenderMaskConfig = {
              guide: !1,
              mask: (t) =>
                Array.from(t).map(() => new RegExp("^[A-Fa-f0-9]+$")),
            }),
            (this.ADDRESS_TYPE = Fe.Z),
            (this.defaultTokenImage =
              "assets/images/icons/coins/default-token-ico.svg");
        }
        changeNetwork(o) {
          this.handleNetworkChange.emit(o);
        }
        handleRevoke(o, t, i) {
          this.handleRevokeCall.emit({ token: o, spender: t, callback: i });
        }
        onImageError(o) {
          this.tokensService.onTokenImageError(o);
        }
      }
      function cn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1(" ", t.token.symbol, " ");
        }
      }
      function ln(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "shortAddress"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind3(2, 1, t.tokenAddress, 3, 3));
        }
      }
      function pn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-switch-button", 19),
            e.ɵɵlistener("handleSwitch", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.changeNetwork(a));
            }),
            e.ɵɵelementEnd();
        }
      }
      function dn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-revoke-button", 20),
            e.ɵɵlistener("handleRevoke", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext().$implicit,
                l = e.ɵɵnextContext();
              return e.ɵɵresetView(
                l.handleRevoke(s.tokenAddress, s.spender, a)
              );
            }),
            e.ɵɵelementEnd();
        }
      }
      function un(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span", 21), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(t.value);
        }
      }
      function gn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(
            4,
            "div",
            6
          )(5, "a", 7),
            e.ɵɵpipe(6, "scannerLink"),
            e.ɵɵelementStart(7, "img", 8),
            e.ɵɵlistener("error", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.onImageError(a));
            }),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(8, cn, 2, 1, "ng-container", 9),
            e.ɵɵtemplate(
              9,
              ln,
              3,
              5,
              "ng-template",
              null,
              10,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelement(11, "img", 11),
            e.ɵɵpipe(12, "translate"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(13, "div", 12)(14, "span"),
            e.ɵɵtext(15, "Approved Spender: "),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(16, "a", 7),
            e.ɵɵpipe(17, "scannerLink"),
            e.ɵɵelementStart(18, "div"),
            e.ɵɵtext(19),
            e.ɵɵpipe(20, "shortAddress"),
            e.ɵɵelement(21, "img", 11),
            e.ɵɵpipe(22, "translate"),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementStart(23, "div", 13)(24, "div", 14),
            e.ɵɵtext(25),
            e.ɵɵpipe(26, "date"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(27, pn, 1, 0, "app-switch-button", 15),
            e.ɵɵtemplate(
              28,
              dn,
              1,
              0,
              "ng-template",
              null,
              16,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(30, "div", 17)(31, "span"),
            e.ɵɵtext(32, "Allowance: "),
            e.ɵɵelementEnd(),
            e.ɵɵtext(33),
            e.ɵɵpipe(34, "shortAddress"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(
              35,
              un,
              2,
              1,
              "ng-template",
              null,
              18,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = o.$implicit,
            i = e.ɵɵreference(10),
            a = e.ɵɵreference(29),
            s = e.ɵɵreference(36),
            l = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵproperty(
              "safetyLink",
              e.ɵɵpipeBind3(
                6,
                16,
                t.tokenAddress,
                l.selectedBlockchain,
                l.ADDRESS_TYPE.TOKEN
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "src",
              (null == t || null == t.token ? null : t.token.image) ||
                l.defaultTokenImage,
              e.ɵɵsanitizeUrl
            )(
              "alt",
              (null == t || null == t.token ? null : t.token.symbol) ||
                t.tokenAddress
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.token)("ngIfElse", i),
            e.ɵɵadvance(3),
            e.ɵɵproperty("alt", e.ɵɵpipeBind1(12, 20, "checkOnScanner")),
            e.ɵɵadvance(5),
            e.ɵɵproperty(
              "safetyLink",
              e.ɵɵpipeBind3(
                17,
                22,
                t.spender,
                l.selectedBlockchain,
                l.ADDRESS_TYPE.WALLET
              )
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind3(20, 26, t.spender, 5, 5),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("alt", e.ɵɵpipeBind1(22, 30, "checkOnScanner")),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(26, 32, t.timeStamp, "MMM dd, yyyy h:mm"),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", l.allowChangeBlockchain)("ngIfElse", a),
            e.ɵɵadvance(3),
            e.ɵɵproperty("tuiHint", "Unlimited" === t.value ? null : s)(
              "tuiHintShowDelay",
              50
            )("tuiHintHideDelay", 100),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              "",
              "Unlimited" === t.value
                ? "Unlimited"
                : e.ɵɵpipeBind3(34, 35, t.value, 10, 10),
              " "
            );
        }
      }
      (V.ɵfac = function (o) {
        return new (o || V)(e.ɵɵdirectiveInject(J.H));
      }),
        (V.ɵcmp = e.ɵɵdefineComponent({
          type: V,
          selectors: [["app-desktop-table"]],
          inputs: {
            approves: "approves",
            allApproves: "allApproves",
            page: "page",
            size: "size",
            isLimitsExceeded: "isLimitsExceeded",
            allowChangeBlockchain: "allowChangeBlockchain",
            tokenControl: "tokenControl",
            spenderControl: "spenderControl",
            switchLoading: "switchLoading",
            tableLoading: "tableLoading",
            selectedBlockchain: "selectedBlockchain",
          },
          outputs: {
            handleNetworkChange: "handleNetworkChange",
            handleRevokeCall: "handleRevokeCall",
          },
          ngContentSelectors: ["*"],
          decls: 23,
          vars: 5,
          consts: [
            [1, "table", "tui-table_layout_fixed"],
            ["width", "170"],
            ["width", "150"],
            ["width", "130"],
            [1, "table__tr", "table__tr_head"],
            [1, "table__th"],
            ["tuiTextfieldSize", "s", 3, "textMask", "formControl"],
            [4, "ngFor", "ngForOf"],
            [1, "image-container"],
            [3, "safetyLink"],
            [3, "src", "alt", "error"],
            [4, "ngIf", "ngIfElse"],
            ["address", ""],
            ["src", "assets/images/icons/link-arrow.svg", 1, "link", 3, "alt"],
            [
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "top-right",
              3,
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
            ],
            ["allowanceHint", ""],
            [3, "handleSwitch", 4, "ngIf", "ngIfElse"],
            ["revoke", ""],
            [1, "token-card__name-container-address-hint"],
            [3, "handleSwitch"],
            [3, "handleRevoke"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵprojectionDef(),
              e.ɵɵelementStart(0, "table", 0)(1, "colgroup"),
              e.ɵɵelement(2, "col", 1)(3, "col", 2)(4, "col", 2)(5, "col", 2)(
                6,
                "col",
                3
              ),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(7, "tbody")(8, "tr", 4)(9, "th", 5)(
                10,
                "tui-input",
                6
              ),
              e.ɵɵtext(11, "Asset"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(12, "th", 5)(13, "tui-input", 6),
              e.ɵɵtext(14, "Approved Spender"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(15, "th", 5),
              e.ɵɵtext(16, "Allowance"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(17, "th", 5),
              e.ɵɵtext(18, "Date"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(19, "th", 5),
              e.ɵɵtext(20, "Actions"),
              e.ɵɵelementEnd()(),
              e.ɵɵtemplate(21, rn, 32, 39, "tr", 7),
              e.ɵɵelementEnd(),
              e.ɵɵprojection(22),
              e.ɵɵelementEnd()),
              2 & o &&
                (e.ɵɵadvance(10),
                e.ɵɵproperty("textMask", t.assetMaskConfig)(
                  "formControl",
                  t.tokenControl
                ),
                e.ɵɵadvance(3),
                e.ɵɵproperty("textMask", t.spenderMaskConfig)(
                  "formControl",
                  t.spenderControl
                ),
                e.ɵɵadvance(8),
                e.ɵɵproperty("ngForOf", t.approves));
          },
          dependencies: [
            p.sg,
            p.O5,
            v.NgControlStatus,
            v.FormControlDirective,
            k.sz,
            _e.K3,
            _e.wU,
            He.x,
            ve.D,
            Ue.hd,
            E,
            P,
            p.uU,
            Ke.m,
            re.X$,
            We.Y,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.table[_ngcontent-%COMP%]{width:100%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:16px}.table__tr_head[_ngcontent-%COMP%]{background:var(--form-background)}.table[_ngcontent-%COMP%]   .table__th[_ngcontent-%COMP%]{color:#a2a1a5;font-weight:400;font-size:14px;line-height:17px;letter-spacing:normal;padding:16px;text-align:left}html.dark[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   .table__th[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .table[_ngcontent-%COMP%]   .table__th[_ngcontent-%COMP%]{color:#fff}.table[_ngcontent-%COMP%]   .table__th[_ngcontent-%COMP%]:first-child{border-color:transparent;border-left-style:solid;border-top-left-radius:10px;border-bottom-left-radius:10px}.table[_ngcontent-%COMP%]   .table__th[_ngcontent-%COMP%]:last-child{border-color:transparent;border-left-style:solid;border-top-right-radius:10px;border-bottom-right-radius:10px}",
          ],
          changeDetection: 0,
        }));
      class F {
        constructor(o) {
          (this.tokensService = o),
            (this.handleNetworkChange = new e.EventEmitter()),
            (this.handleRevokeCall = new e.EventEmitter()),
            (this.ADDRESS_TYPE = Fe.Z),
            (this.defaultTokenImage =
              "assets/images/icons/coins/default-token-ico.svg");
        }
        changeNetwork(o) {
          this.handleNetworkChange.emit(o);
        }
        handleRevoke(o, t, i) {
          this.handleRevokeCall.emit({ token: o, spender: t, callback: i });
        }
        onImageError(o) {
          this.tokensService.onTokenImageError(o);
        }
      }
      function hn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "tr")(1, "td", 8)(2, "tui-table-pagination", 9),
            e.ɵɵlistener("pageChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(4);
              return e.ɵɵresetView((s.page = a));
            })("sizeChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(4);
              return e.ɵɵresetView((s.size = a));
            }),
            e.ɵɵelementEnd()()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(3).ngLet;
          e.ɵɵadvance(1),
            e.ɵɵproperty("colSpan", 5),
            e.ɵɵadvance(1),
            e.ɵɵproperty("total", t.allApproves.length)("page", t.page)(
              "size",
              t.size
            );
        }
      }
      function vn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "tfoot"),
            e.ɵɵtemplate(2, hn, 3, 4, "tr", 7),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵreference(6);
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", null == t.approves ? null : t.approves.length)(
              "ngIfElse",
              i
            );
        }
      }
      function _n(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-desktop-table", 5),
            e.ɵɵlistener("handleNetworkChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.changeNetwork(a));
            })("handleRevokeCall", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.handleRevoke(a));
            }),
            e.ɵɵtemplate(1, vn, 3, 2, "ng-container", 6),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("allApproves", t.allApproves)(
            "allowChangeBlockchain",
            t.allowChangeBlockchain
          )("approves", t.approves)("isLimitsExceeded", t.isLimitsExceeded)(
            "page",
            t.page
          )("switchLoading", t.revokeLoading)("size", t.size)(
            "spenderControl",
            t.spenderControl
          )("tableLoading", t.tableLoading)("tokenControl", t.tokenControl)(
            "selectedBlockchain",
            t.selectedBlockchain.key
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              !i.queryForm.controls.spender.value &&
                !i.queryForm.controls.token.value
            );
        }
      }
      function fn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 11)(1, "tui-table-pagination", 9),
            e.ɵɵlistener("pageChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(4);
              return e.ɵɵresetView((s.page = a));
            })("sizeChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(4);
              return e.ɵɵresetView((s.size = a));
            }),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(3).ngLet;
          e.ɵɵadvance(1),
            e.ɵɵproperty("total", t.allApproves.length)("page", t.page)(
              "size",
              t.size
            );
        }
      }
      function Cn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, fn, 2, 3, "div", 10),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵreference(6);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", null == t.approves ? null : t.approves.length)(
              "ngIfElse",
              i
            );
        }
      }
      function yn(n, o) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-mobile-table", 5),
            e.ɵɵlistener("handleNetworkChange", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.changeNetwork(a));
            })("handleRevokeCall", function (a) {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.handleRevoke(a));
            }),
            e.ɵɵtemplate(1, Cn, 2, 2, "ng-container", 6),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("allApproves", t.allApproves)(
            "allowChangeBlockchain",
            t.allowChangeBlockchain
          )("approves", t.approves)("isLimitsExceeded", t.isLimitsExceeded)(
            "page",
            t.page
          )("switchLoading", t.revokeLoading)("size", t.size)(
            "spenderControl",
            t.spenderControl
          )("tableLoading", t.tableLoading)("tokenControl", t.tokenControl)(
            "selectedBlockchain",
            t.selectedBlockchain.key
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              !i.queryForm.controls.spender.value &&
                !i.queryForm.controls.token.value
            );
        }
      }
      function xn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p", 12), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              t.isLimitsExceeded
                ? "Request limit exceeded, try again in few seconds."
                : "No approve transactions found.",
              " "
            );
        }
      }
      function bn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "tui-loader", 1),
            e.ɵɵtemplate(2, _n, 2, 12, "app-desktop-table", 2),
            e.ɵɵtemplate(
              3,
              yn,
              2,
              12,
              "ng-template",
              null,
              3,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(
              5,
              xn,
              2,
              1,
              "ng-template",
              null,
              4,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = o.ngLet,
            i = e.ɵɵreference(4),
            a = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("showLoader", t.tableLoading)("overlay", !0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !a.isMobile)("ngIfElse", i);
        }
      }
      (F.ɵfac = function (o) {
        return new (o || F)(e.ɵɵdirectiveInject(J.H));
      }),
        (F.ɵcmp = e.ɵɵdefineComponent({
          type: F,
          selectors: [["app-mobile-table"]],
          inputs: {
            approves: "approves",
            allApproves: "allApproves",
            page: "page",
            size: "size",
            isLimitsExceeded: "isLimitsExceeded",
            allowChangeBlockchain: "allowChangeBlockchain",
            tokenControl: "tokenControl",
            spenderControl: "spenderControl",
            switchLoading: "switchLoading",
            tableLoading: "tableLoading",
            selectedBlockchain: "selectedBlockchain",
          },
          outputs: {
            handleNetworkChange: "handleNetworkChange",
            handleRevokeCall: "handleRevokeCall",
          },
          ngContentSelectors: ["*"],
          decls: 3,
          vars: 1,
          consts: [
            [1, "table-row"],
            ["class", "table-col", 4, "ngFor", "ngForOf"],
            [1, "table-col"],
            [1, "card"],
            [1, "top"],
            [1, "left"],
            [1, "image-container"],
            [3, "safetyLink"],
            [3, "src", "alt", "error"],
            [4, "ngIf", "ngIfElse"],
            ["address", ""],
            ["src", "assets/images/icons/link-arrow.svg", 1, "link", 3, "alt"],
            [1, "image-container", "spender"],
            [1, "right"],
            [1, "image-container", "date"],
            [3, "handleSwitch", 4, "ngIf", "ngIfElse"],
            ["revoke", ""],
            [
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "top-right",
              3,
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
            ],
            ["allowanceHint", ""],
            [3, "handleSwitch"],
            [3, "handleRevoke"],
            [1, "token-card__name-container-address-hint"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵprojectionDef(),
              e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, gn, 37, 39, "div", 1),
              e.ɵɵprojection(2),
              e.ɵɵelementEnd()),
              2 & o && (e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", t.approves));
          },
          dependencies: [p.sg, p.O5, He.x, ve.D, E, P, p.uU, Ke.m, re.X$, We.Y],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px;background:var(--form-background);border-radius:20px}.card[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:column}.card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{align-items:flex-end}.card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-bottom:0}.table-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}.table-col[_ngcontent-%COMP%]{width:100%}app-rubic-button[_ngcontent-%COMP%]{width:100%}.image-container[_ngcontent-%COMP%]{margin-bottom:10px}.image-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;font-weight:600}.spender[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.date[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]     app-switch-button, [_nghost-%COMP%]     app-revoke-button{min-width:auto}",
          ],
          changeDetection: 0,
        }));
      const kn = function (n, o, t, i, a, s, l, u, g, m, _) {
        return {
          approves: n,
          allApproves: o,
          page: t,
          size: i,
          isLimitsExceeded: a,
          allowChangeBlockchain: s,
          tokenControl: l,
          spenderControl: u,
          revokeLoading: g,
          tableLoading: m,
          selectedBlockchain: _,
        };
      };
      class H {
        constructor(o, t, i, a, s, l) {
          (this.approveScannerService = o),
            (this.errorsService = t),
            (this.cdr = i),
            (this.walletConnectorService = a),
            (this.sdkService = s),
            (this.isMobile = l),
            (this.allowChangeBlockchain$ =
              this.walletConnectorService.networkChange$.pipe(
                (0, G.V)(this.approveScannerService.selectedBlockchain$),
                (0, b.U)(([u, g]) => u !== g.key)
              )),
            (this.exceededLimits$ = this.approveScannerService.exceededLimits$),
            (this.approves$ = this.approveScannerService.visibleApproves$.pipe(
              (0, b.U)((u) => {
                const g = new ke.Z(2).pow(256).minus(1);
                return u.map((m) => ({
                  ...m,
                  value: g.eq(m.value) ? "Unlimited" : m.value,
                }));
              })
            )),
            (this.allApproves$ = this.approveScannerService.allApproves$),
            (this.switchLoading = !1),
            (this.tableLoading$ = this.approveScannerService.tableLoading$),
            (this.size$ = this.approveScannerService.size$),
            (this.page$ = this.approveScannerService.page$),
            (this.queryForm = this.approveScannerService.queryForm),
            (this.selectedBlockchain$ =
              this.approveScannerService.form.controls.blockchain.valueChanges.pipe(
                (0, Z.O)(
                  this.approveScannerService.form.controls.blockchain.value
                )
              ));
        }
        set size(o) {
          this.approveScannerService.size = o;
        }
        set page(o) {
          this.approveScannerService.page = o;
        }
        handleRevoke({ token: o, spender: t, callback: i }) {
          var a = this;
          return (0, Y.Z)(function* () {
            try {
              yield a.approveScannerService.revokeApprove(o, t);
            } catch (s) {
              a.errorsService.catch(s);
            } finally {
              i();
            }
          })();
        }
        changeNetwork(o) {
          var t = this;
          return (0, Y.Z)(function* () {
            try {
              const i = yield (0, zt.z)(
                t.approveScannerService.selectedBlockchain$
              );
              yield t.walletConnectorService.switchChain(i.key),
                yield (0, Nt.n)(
                  t.sdkService.sdkLoading$.pipe((0, z.P)((a) => !1 === a))
                );
            } catch (i) {
              t.errorsService.catch(i);
            } finally {
              o();
            }
          })();
        }
      }
      function Tn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 4)(1, "div", 5),
            e.ɵɵtext(2),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "div", 6),
            e.ɵɵtext(4, " Balance: "),
            e.ɵɵelementStart(5, "span"),
            e.ɵɵtext(6),
            e.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const t = o.ngLet,
            i = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(i),
            e.ɵɵadvance(3),
            e.ɵɵclassProp("tui-skeleton", !t),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(t);
        }
      }
      function wn(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2),
            e.ɵɵtemplate(2, Tn, 7, 4, "div", 3),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelement(4, "app-form"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(5, "app-table"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(3, 1, t.userBalance$));
        }
      }
      (H.ɵfac = function (o) {
        return new (o || H)(
          e.ɵɵdirectiveInject(y),
          e.ɵɵdirectiveInject(jt.r),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(j.j),
          e.ɵɵdirectiveInject(Se.w),
          e.ɵɵdirectiveInject(X.fL)
        );
      }),
        (H.ɵcmp = e.ɵɵdefineComponent({
          type: H,
          selectors: [["app-table"]],
          decls: 9,
          vars: 29,
          consts: [
            [4, "ngLet"],
            [3, "showLoader", "overlay"],
            [
              3,
              "allApproves",
              "allowChangeBlockchain",
              "approves",
              "isLimitsExceeded",
              "page",
              "switchLoading",
              "size",
              "spenderControl",
              "tableLoading",
              "tokenControl",
              "selectedBlockchain",
              "handleNetworkChange",
              "handleRevokeCall",
              4,
              "ngIf",
              "ngIfElse",
            ],
            ["mobile", ""],
            ["noApproves", ""],
            [
              3,
              "allApproves",
              "allowChangeBlockchain",
              "approves",
              "isLimitsExceeded",
              "page",
              "switchLoading",
              "size",
              "spenderControl",
              "tableLoading",
              "tokenControl",
              "selectedBlockchain",
              "handleNetworkChange",
              "handleRevokeCall",
            ],
            [4, "ngIf"],
            [4, "ngIf", "ngIfElse"],
            [3, "colSpan"],
            [3, "total", "page", "size", "pageChange", "sizeChange"],
            ["class", "full-width", 4, "ngIf", "ngIfElse"],
            [1, "full-width"],
            [1, "no-transactions"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵtemplate(0, bn, 7, 4, "ng-container", 0),
              e.ɵɵpipe(1, "async"),
              e.ɵɵpipe(2, "async"),
              e.ɵɵpipe(3, "async"),
              e.ɵɵpipe(4, "async"),
              e.ɵɵpipe(5, "async"),
              e.ɵɵpipe(6, "async"),
              e.ɵɵpipe(7, "async"),
              e.ɵɵpipe(8, "async")),
              2 & o &&
                e.ɵɵproperty(
                  "ngLet",
                  e.ɵɵpureFunctionV(17, kn, [
                    e.ɵɵpipeBind1(1, 1, t.approves$),
                    e.ɵɵpipeBind1(2, 3, t.allApproves$),
                    e.ɵɵpipeBind1(3, 5, t.page$),
                    e.ɵɵpipeBind1(4, 7, t.size$),
                    e.ɵɵpipeBind1(5, 9, t.exceededLimits$),
                    e.ɵɵpipeBind1(6, 11, t.allowChangeBlockchain$),
                    t.queryForm.controls.token,
                    t.queryForm.controls.spender,
                    t.switchLoading,
                    e.ɵɵpipeBind1(7, 13, t.tableLoading$),
                    e.ɵɵpipeBind1(8, 15, t.selectedBlockchain$),
                  ])
                );
          },
          dependencies: [p.O5, Ie.e, Jt, Ve.kM, V, F, p.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}@media (max-width: 900px){[_nghost-%COMP%]     .table{width:auto!important}}[_nghost-%COMP%]     .no-transactions{width:300px;margin-left:16px;font-size:18px}[_nghost-%COMP%]     app-rubic-button{display:block;width:150px}[_nghost-%COMP%]     .image-container{display:flex;align-items:center}[_nghost-%COMP%]     .image-container img{height:16px;margin-right:10px}[_nghost-%COMP%]     .image-container a{display:flex;align-items:center}[_nghost-%COMP%]     .image-container a img{height:16px}[_nghost-%COMP%]     .image-container a .link{height:12px;margin-left:10px;opacity:.75;filter:invert(1)}tui-table-pagination[_ngcontent-%COMP%]    >button{background-color:var(--form-background);border-radius:5px}.full-width[_ngcontent-%COMP%]{width:100%}",
          ],
          changeDetection: 0,
        }));
      class U {
        constructor(o, t, i, a, s, l, u, g) {
          (this.walletConnectorService = o),
            (this.service = t),
            (this.sdkService = i),
            (this.cdr = a),
            (this.router = s),
            (this.tokensService = l),
            (this.tokensStoreService = u),
            (this.destroy$ = g),
            (this.address$ = this.walletConnectorService.addressChange$),
            (this.userBalance$ = this.service.selectedBlockchain$.pipe(
              (0, G.V)(
                this.address$,
                this.tokensStoreService.tokens$.pipe((0, z.P)(Boolean))
              ),
              (0, S.w)(([m]) =>
                (0, xe.D)([
                  (0, D.of)(m),
                  this.tokensService.getAndUpdateTokenBalance(
                    Oe.nativeTokensList[m.key]
                  ),
                ])
              ),
              (0, b.U)(([m, _]) => `${_} ${Oe.nativeTokensList[m.key].symbol}`)
            )),
            (this.loading = !1),
            this.handleUnlogin();
        }
        handleUnlogin() {
          this.walletConnectorService.addressChange$
            .pipe(
              (0, z.P)((o) => null === o),
              (0, se.R)(this.destroy$),
              (0, S.w)(() => this.router.navigateByUrl(ce.u.REVOKE_APPROVAL))
            )
            .subscribe();
        }
      }
      (U.ɵfac = function (o) {
        return new (o || U)(
          e.ɵɵdirectiveInject(j.j),
          e.ɵɵdirectiveInject(y),
          e.ɵɵdirectiveInject(Se.w),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(Q.F0),
          e.ɵɵdirectiveInject(J.H),
          e.ɵɵdirectiveInject(Me.Z),
          e.ɵɵdirectiveInject(f.a3)
        );
      }),
        (U.ɵcmp = e.ɵɵdefineComponent({
          type: U,
          selectors: [["app-approve-scanner-page"]],
          features: [e.ɵɵProvidersFeature([f.a3])],
          decls: 2,
          vars: 3,
          consts: [
            ["class", "container", 4, "ngLet"],
            [1, "container"],
            [1, "profile-container"],
            ["class", "profile", 4, "ngLet"],
            [1, "profile"],
            [1, "profile__address"],
            [1, "profile__balance"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵtemplate(0, wn, 6, 3, "div", 0), e.ɵɵpipe(1, "async")),
              2 & o && e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, t.address$));
          },
          dependencies: [Ie.e, $, H, p.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.container[_ngcontent-%COMP%]{max-width:1240px}@media (max-width: 599px){.container[_ngcontent-%COMP%]{padding:0}}app-form[_ngcontent-%COMP%]{display:block;width:200px}.profile-container[_ngcontent-%COMP%]{margin-bottom:20px;padding:20px;background-color:var(--form-background);border-radius:20px}.profile-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media (max-width: 599px){.profile-container[_ngcontent-%COMP%]{flex-direction:column}}.profile[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.profile__address[_ngcontent-%COMP%]{margin-bottom:5px;font-size:24px;line-height:24px;text-overflow:ellipsis;background-color:var(--primary-color);background-image:linear-gradient(90deg,var(--primary-color),var(--accent-color));background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media (max-width: 1023px){.profile__address[_ngcontent-%COMP%]{font-size:20px}}@media (max-width: 768px){.profile__address[_ngcontent-%COMP%]{width:250px;overflow:hidden}}@media (max-width: 599px){.profile__address[_ngcontent-%COMP%]{width:auto}}@media (max-width: 420px){.profile__address[_ngcontent-%COMP%]{font-size:18px}}.profile__balance[_ngcontent-%COMP%]{font-weight:600}@media (max-width: 599px){.profile__balance[_ngcontent-%COMP%]{margin-bottom:20px}}.profile__balance[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}",
          ],
          changeDetection: 0,
        }));
      var Mn = r(4289);
      const Sn = ["*"];
      let On = (() => {
          let n = class {
            constructor() {
              (this.size = "m"),
                (this.textAlign = "left"),
                (this.hoverable = !1),
                (this.transparent = !1);
            }
            get sizeS() {
              return "s" === this.size;
            }
            get sizeM() {
              return "m" === this.size;
            }
            get sizeL() {
              return "l" === this.size;
            }
            get textAlignLeft() {
              return "left" === this.textAlign;
            }
            get textAlignCenter() {
              return "center" === this.textAlign;
            }
            get textAlignRight() {
              return "right" === this.textAlign;
            }
          };
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵcmp = e.ɵɵdefineComponent({
              type: n,
              selectors: [["tui-island"], ["a", "tuiIsland", ""]],
              hostAttrs: [1, "tui-island"],
              hostVars: 16,
              hostBindings: function (t, i) {
                2 & t &&
                  e.ɵɵclassProp("tui-island_hoverable", i.hoverable)(
                    "tui-island_transparent",
                    i.transparent
                  )("tui-island_size_s", i.sizeS)("tui-island_size_m", i.sizeM)(
                    "tui-island_size_l",
                    i.sizeL
                  )("tui-island_text-align_left", i.textAlignLeft)(
                    "tui-island_text-align_center",
                    i.textAlignCenter
                  )("tui-island_text-align_right", i.textAlignRight);
              },
              inputs: {
                size: "size",
                textAlign: "textAlign",
                hoverable: "hoverable",
                transparent: "transparent",
              },
              ngContentSelectors: Sn,
              decls: 1,
              vars: 0,
              template: function (t, i) {
                1 & t && (e.ɵɵprojectionDef(), e.ɵɵprojection(0));
              },
              styles: ["[_nghost-%COMP%]{display:block}"],
              changeDetection: 0,
            })),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.TH)()],
              n.prototype,
              "size",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.Input)(), (0, h.TH)()],
              n.prototype,
              "textAlign",
              void 0
            ),
            (0, c.__decorate)(
              [
                (0, e.Input)(),
                (0, e.HostBinding)("class.tui-island_hoverable"),
                (0, h.TH)(),
              ],
              n.prototype,
              "hoverable",
              void 0
            ),
            (0, c.__decorate)(
              [
                (0, e.Input)(),
                (0, e.HostBinding)("class.tui-island_transparent"),
                (0, h.TH)(),
              ],
              n.prototype,
              "transparent",
              void 0
            ),
            (0, c.__decorate)(
              [(0, e.HostBinding)("class.tui-island_size_s")],
              n.prototype,
              "sizeS",
              null
            ),
            (0, c.__decorate)(
              [(0, e.HostBinding)("class.tui-island_size_m")],
              n.prototype,
              "sizeM",
              null
            ),
            (0, c.__decorate)(
              [(0, e.HostBinding)("class.tui-island_size_l")],
              n.prototype,
              "sizeL",
              null
            ),
            (0, c.__decorate)(
              [(0, e.HostBinding)("class.tui-island_text-align_left")],
              n.prototype,
              "textAlignLeft",
              null
            ),
            (0, c.__decorate)(
              [(0, e.HostBinding)("class.tui-island_text-align_center")],
              n.prototype,
              "textAlignCenter",
              null
            ),
            (0, c.__decorate)(
              [(0, e.HostBinding)("class.tui-island_text-align_right")],
              n.prototype,
              "textAlignRight",
              null
            ),
            n
          );
        })(),
        In = (() => {
          let n = class {};
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [p.ez] })),
            n
          );
        })();
      function En(n, o) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 5)(1, "tui-island", 6)(2, "div", 7)(
              3,
              "div",
              8
            ),
            e.ɵɵelement(4, "img", 9),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div")(6, "h3", 10)(7, "span", 11),
            e.ɵɵtext(8),
            e.ɵɵelementEnd(),
            e.ɵɵtext(9),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(10, "p", 12),
            e.ɵɵtext(11),
            e.ɵɵelementEnd()()()()()),
          2 & n)
        ) {
          const t = o.$implicit,
            i = o.index;
          e.ɵɵadvance(4),
            e.ɵɵproperty("alt", t.label)("src", t.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1("", i + 1, "."),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", t.label, " "),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(t.description);
        }
      }
      class K {
        constructor(o, t, i, a) {
          (this.cdr = o),
            (this.destroy$ = t),
            (this.walletConnectorService = i),
            (this.router = a),
            (this.cards = [
              {
                image:
                  "assets/images/icons/approve-scanner-page/empty-wallet.png",
                label: "Connect",
                description:
                  "Click Connect Wallet on the top right or just above this card.",
              },
              {
                image:
                  "assets/images/icons/approve-scanner-page/search-status.png",
                label: "Inspect",
                description:
                  "Inspect your allowances by using the network selection, sorting and filtering options.",
              },
              {
                image:
                  "assets/images/icons/approve-scanner-page/card-slash.png",
                label: "Revoke",
                description:
                  "Revoke the allowances that you no longer use to prevent unwanted access to your funds.",
              },
            ]),
            this.handleWalletChange();
        }
        handleWalletChange() {
          this.walletConnectorService.addressChange$
            .pipe(
              (0, z.P)(Boolean),
              (0, se.R)(this.destroy$),
              (0, S.w)(() =>
                this.router.navigateByUrl(`${ce.u.REVOKE_APPROVAL}/revoke`)
              )
            )
            .subscribe();
        }
      }
      (K.ɵfac = function (o) {
        return new (o || K)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(f.a3),
          e.ɵɵdirectiveInject(j.j),
          e.ɵɵdirectiveInject(Q.F0)
        );
      }),
        (K.ɵcmp = e.ɵɵdefineComponent({
          type: K,
          selectors: [["app-overview-page"]],
          features: [e.ɵɵProvidersFeature([f.a3])],
          decls: 9,
          vars: 1,
          consts: [
            [1, "container"],
            [1, "description"],
            [1, "button-container"],
            [1, "tui-row"],
            ["class", "tui-col_md-4", 4, "ngFor", "ngForOf"],
            [1, "tui-col_md-4"],
            ["size", "l", "textAlign", "center"],
            [1, "tui-island__content"],
            [1, "image-container"],
            [1, "image", 3, "alt", "src"],
            [1, "tui-island__title"],
            [1, "island-title-prefix"],
            [1, "tui-island__paragraph"],
          ],
          template: function (o, t) {
            1 & o &&
              (e.ɵɵelementStart(0, "div", 0)(1, "h1"),
              e.ɵɵtext(2, "Take Back Control of Your Wallet"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(3, "p", 1),
              e.ɵɵtext(
                4,
                " When using dApps like Uniswap or OpenSea, you must grant them permission to spend your tokens and NFTs. This is called an allowance. If you don\u2019t revoke these allowances, the dApp can spend your tokens indefinitely. Take back control by revoking your allowances. "
              ),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(5, "div", 2),
              e.ɵɵelement(6, "app-login-button"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(7, "div", 3),
              e.ɵɵtemplate(8, En, 12, 5, "div", 4),
              e.ɵɵelementEnd()()),
              2 & o && (e.ɵɵadvance(8), e.ɵɵproperty("ngForOf", t.cards));
          },
          dependencies: [p.sg, Mn.T, On],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{--tui-base-01: var(--tui-secondary);--tui-base-03: transparent}@media (max-width: 500px){.tui-col_md-4[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}}.image[_ngcontent-%COMP%]{width:64px;height:64px;margin-top:-64px;padding:10px;background:var(--secondary-background);border-radius:100%;filter:invert(.5)}tui-island[_ngcontent-%COMP%]{height:calc(100% - 2rem)}h1[_ngcontent-%COMP%]{font-size:64px;line-height:64px;background-color:var(--primary-color);background-image:linear-gradient(-45deg,var(--primary-color),var(--accent-color));background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent}@media (max-width: 500px){h1[_ngcontent-%COMP%]{font-size:28px;line-height:28px;text-align:center}}.description[_ngcontent-%COMP%]{margin-bottom:20px;font-size:16px}@media (max-width: 500px){.description[_ngcontent-%COMP%]{text-align:center}}.button-container[_ngcontent-%COMP%]{width:250px;margin-bottom:50px}@media (max-width: 500px){.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:auto}}",
          ],
          changeDetection: 0,
        }));
      class A {
        constructor(o, t) {
          (this.walletConnectorService = o), (this.router = t);
        }
        canActivate(o) {
          const t = o.data.path;
          return this.walletConnectorService.address
            ? (0, D.of)(!0)
            : (this.router.navigateByUrl(t), (0, D.of)(!1));
        }
      }
      (A.ɵfac = function (o) {
        return new (o || A)(e.ɵɵinject(j.j), e.ɵɵinject(Q.F0));
      }),
        (A.ɵprov = e.ɵɵdefineInjectable({
          token: A,
          factory: A.ɵfac,
          providedIn: "root",
        }));
      const Pn = [
        {
          path: "revoke",
          component: U,
          canActivate: [A],
          data: { path: ce.u.REVOKE_APPROVAL },
        },
        { path: "**", component: K },
      ];
      class L {}
      (L.ɵfac = function (o) {
        return new (o || L)();
      }),
        (L.ɵmod = e.ɵɵdefineNgModule({ type: L })),
        (L.ɵinj = e.ɵɵdefineInjector({ imports: [Q.Bz.forChild(Pn)] }));
      var An = r(22802),
        Ln = r(25253);
      class B {}
      (B.ɵfac = function (o) {
        return new (o || B)();
      }),
        (B.ɵmod = e.ɵɵdefineNgModule({ type: B })),
        (B.ɵinj = e.ɵɵdefineInjector({
          providers: [y],
          imports: [
            p.ez,
            L,
            v.ReactiveFormsModule,
            Bt,
            k.cn,
            An.cy,
            _e.Qf,
            je.zX,
            Ln.m,
            te.fN,
            In,
            Xt,
            Ve.dS,
            ve.go,
            Ue.QA,
          ],
        }));
    },
  },
]);
