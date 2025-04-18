// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: enreach/manager/query.proto

package manager

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Query_Params_FullMethodName             = "/enreach.manager.Query/Params"
	Query_Operator_FullMethodName           = "/enreach.manager.Query/Operator"
	Query_OperatorAll_FullMethodName        = "/enreach.manager.Query/OperatorAll"
	Query_Manager_FullMethodName            = "/enreach.manager.Query/Manager"
	Query_ManagerAll_FullMethodName         = "/enreach.manager.Query/ManagerAll"
	Query_GetManagerByRegion_FullMethodName = "/enreach.manager.Query/GetManagerByRegion"
	Query_Superior_FullMethodName           = "/enreach.manager.Query/Superior"
)

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type QueryClient interface {
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// Queries a list of Operator items.
	Operator(ctx context.Context, in *QueryGetOperatorRequest, opts ...grpc.CallOption) (*QueryGetOperatorResponse, error)
	OperatorAll(ctx context.Context, in *QueryAllOperatorRequest, opts ...grpc.CallOption) (*QueryAllOperatorResponse, error)
	// Queries a list of Manager items.
	Manager(ctx context.Context, in *QueryGetManagerRequest, opts ...grpc.CallOption) (*QueryGetManagerResponse, error)
	ManagerAll(ctx context.Context, in *QueryAllManagerRequest, opts ...grpc.CallOption) (*QueryAllManagerResponse, error)
	// Queries a list of GetManagerByRegion items.
	GetManagerByRegion(ctx context.Context, in *QueryGetManagerByRegionRequest, opts ...grpc.CallOption) (*QueryGetManagerByRegionResponse, error)
	// Queries a Superior by index.
	Superior(ctx context.Context, in *QueryGetSuperiorRequest, opts ...grpc.CallOption) (*QueryGetSuperiorResponse, error)
}

type queryClient struct {
	cc grpc.ClientConnInterface
}

func NewQueryClient(cc grpc.ClientConnInterface) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, Query_Params_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Operator(ctx context.Context, in *QueryGetOperatorRequest, opts ...grpc.CallOption) (*QueryGetOperatorResponse, error) {
	out := new(QueryGetOperatorResponse)
	err := c.cc.Invoke(ctx, Query_Operator_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) OperatorAll(ctx context.Context, in *QueryAllOperatorRequest, opts ...grpc.CallOption) (*QueryAllOperatorResponse, error) {
	out := new(QueryAllOperatorResponse)
	err := c.cc.Invoke(ctx, Query_OperatorAll_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Manager(ctx context.Context, in *QueryGetManagerRequest, opts ...grpc.CallOption) (*QueryGetManagerResponse, error) {
	out := new(QueryGetManagerResponse)
	err := c.cc.Invoke(ctx, Query_Manager_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) ManagerAll(ctx context.Context, in *QueryAllManagerRequest, opts ...grpc.CallOption) (*QueryAllManagerResponse, error) {
	out := new(QueryAllManagerResponse)
	err := c.cc.Invoke(ctx, Query_ManagerAll_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) GetManagerByRegion(ctx context.Context, in *QueryGetManagerByRegionRequest, opts ...grpc.CallOption) (*QueryGetManagerByRegionResponse, error) {
	out := new(QueryGetManagerByRegionResponse)
	err := c.cc.Invoke(ctx, Query_GetManagerByRegion_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Superior(ctx context.Context, in *QueryGetSuperiorRequest, opts ...grpc.CallOption) (*QueryGetSuperiorResponse, error) {
	out := new(QueryGetSuperiorResponse)
	err := c.cc.Invoke(ctx, Query_Superior_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
// All implementations must embed UnimplementedQueryServer
// for forward compatibility
type QueryServer interface {
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// Queries a list of Operator items.
	Operator(context.Context, *QueryGetOperatorRequest) (*QueryGetOperatorResponse, error)
	OperatorAll(context.Context, *QueryAllOperatorRequest) (*QueryAllOperatorResponse, error)
	// Queries a list of Manager items.
	Manager(context.Context, *QueryGetManagerRequest) (*QueryGetManagerResponse, error)
	ManagerAll(context.Context, *QueryAllManagerRequest) (*QueryAllManagerResponse, error)
	// Queries a list of GetManagerByRegion items.
	GetManagerByRegion(context.Context, *QueryGetManagerByRegionRequest) (*QueryGetManagerByRegionResponse, error)
	// Queries a Superior by index.
	Superior(context.Context, *QueryGetSuperiorRequest) (*QueryGetSuperiorResponse, error)
	mustEmbedUnimplementedQueryServer()
}

// UnimplementedQueryServer must be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (UnimplementedQueryServer) Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (UnimplementedQueryServer) Operator(context.Context, *QueryGetOperatorRequest) (*QueryGetOperatorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Operator not implemented")
}
func (UnimplementedQueryServer) OperatorAll(context.Context, *QueryAllOperatorRequest) (*QueryAllOperatorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method OperatorAll not implemented")
}
func (UnimplementedQueryServer) Manager(context.Context, *QueryGetManagerRequest) (*QueryGetManagerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Manager not implemented")
}
func (UnimplementedQueryServer) ManagerAll(context.Context, *QueryAllManagerRequest) (*QueryAllManagerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ManagerAll not implemented")
}
func (UnimplementedQueryServer) GetManagerByRegion(context.Context, *QueryGetManagerByRegionRequest) (*QueryGetManagerByRegionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetManagerByRegion not implemented")
}
func (UnimplementedQueryServer) Superior(context.Context, *QueryGetSuperiorRequest) (*QueryGetSuperiorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Superior not implemented")
}
func (UnimplementedQueryServer) mustEmbedUnimplementedQueryServer() {}

// UnsafeQueryServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to QueryServer will
// result in compilation errors.
type UnsafeQueryServer interface {
	mustEmbedUnimplementedQueryServer()
}

func RegisterQueryServer(s grpc.ServiceRegistrar, srv QueryServer) {
	s.RegisterService(&Query_ServiceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_Params_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Operator_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetOperatorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Operator(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_Operator_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Operator(ctx, req.(*QueryGetOperatorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_OperatorAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllOperatorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).OperatorAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_OperatorAll_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).OperatorAll(ctx, req.(*QueryAllOperatorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Manager_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetManagerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Manager(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_Manager_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Manager(ctx, req.(*QueryGetManagerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_ManagerAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllManagerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).ManagerAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_ManagerAll_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).ManagerAll(ctx, req.(*QueryAllManagerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_GetManagerByRegion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetManagerByRegionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).GetManagerByRegion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_GetManagerByRegion_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).GetManagerByRegion(ctx, req.(*QueryGetManagerByRegionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Superior_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetSuperiorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Superior(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_Superior_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Superior(ctx, req.(*QueryGetSuperiorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Query_ServiceDesc is the grpc.ServiceDesc for Query service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Query_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "enreach.manager.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "Operator",
			Handler:    _Query_Operator_Handler,
		},
		{
			MethodName: "OperatorAll",
			Handler:    _Query_OperatorAll_Handler,
		},
		{
			MethodName: "Manager",
			Handler:    _Query_Manager_Handler,
		},
		{
			MethodName: "ManagerAll",
			Handler:    _Query_ManagerAll_Handler,
		},
		{
			MethodName: "GetManagerByRegion",
			Handler:    _Query_GetManagerByRegion_Handler,
		},
		{
			MethodName: "Superior",
			Handler:    _Query_Superior_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "enreach/manager/query.proto",
}
