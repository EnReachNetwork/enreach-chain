// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: enreach/manager/manager.proto

package types

import (
	fmt "fmt"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Manager struct {
	ManagerAccount  string `protobuf:"bytes,1,opt,name=managerAccount,proto3" json:"managerAccount,omitempty"`
	OperatorAccount string `protobuf:"bytes,2,opt,name=operatorAccount,proto3" json:"operatorAccount,omitempty"`
	HostAddress     string `protobuf:"bytes,3,opt,name=hostAddress,proto3" json:"hostAddress,omitempty"`
	ManagerPort     uint32 `protobuf:"varint,4,opt,name=managerPort,proto3" json:"managerPort,omitempty"`
	TrackerPort     uint32 `protobuf:"varint,5,opt,name=trackerPort,proto3" json:"trackerPort,omitempty"`
	ChainAPIPort    uint32 `protobuf:"varint,6,opt,name=chainAPIPort,proto3" json:"chainAPIPort,omitempty"`
	ChainRPCPort    uint32 `protobuf:"varint,7,opt,name=chainRPCPort,proto3" json:"chainRPCPort,omitempty"`
	RegionCode      string `protobuf:"bytes,8,opt,name=regionCode,proto3" json:"regionCode,omitempty"`
	RegisterStatus  string `protobuf:"bytes,9,opt,name=registerStatus,proto3" json:"registerStatus,omitempty"`
	WorkingStatus   string `protobuf:"bytes,10,opt,name=workingStatus,proto3" json:"workingStatus,omitempty"`
	Creator         string `protobuf:"bytes,11,opt,name=creator,proto3" json:"creator,omitempty"`
	CreateAt        uint64 `protobuf:"varint,12,opt,name=createAt,proto3" json:"createAt,omitempty"`
	Updator         string `protobuf:"bytes,13,opt,name=updator,proto3" json:"updator,omitempty"`
	UpdateAt        uint64 `protobuf:"varint,14,opt,name=updateAt,proto3" json:"updateAt,omitempty"`
}

func (m *Manager) Reset()         { *m = Manager{} }
func (m *Manager) String() string { return proto.CompactTextString(m) }
func (*Manager) ProtoMessage()    {}
func (*Manager) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe2e849f6a07a0ae, []int{0}
}
func (m *Manager) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Manager) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Manager.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Manager) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Manager.Merge(m, src)
}
func (m *Manager) XXX_Size() int {
	return m.Size()
}
func (m *Manager) XXX_DiscardUnknown() {
	xxx_messageInfo_Manager.DiscardUnknown(m)
}

var xxx_messageInfo_Manager proto.InternalMessageInfo

func (m *Manager) GetManagerAccount() string {
	if m != nil {
		return m.ManagerAccount
	}
	return ""
}

func (m *Manager) GetOperatorAccount() string {
	if m != nil {
		return m.OperatorAccount
	}
	return ""
}

func (m *Manager) GetHostAddress() string {
	if m != nil {
		return m.HostAddress
	}
	return ""
}

func (m *Manager) GetManagerPort() uint32 {
	if m != nil {
		return m.ManagerPort
	}
	return 0
}

func (m *Manager) GetTrackerPort() uint32 {
	if m != nil {
		return m.TrackerPort
	}
	return 0
}

func (m *Manager) GetChainAPIPort() uint32 {
	if m != nil {
		return m.ChainAPIPort
	}
	return 0
}

func (m *Manager) GetChainRPCPort() uint32 {
	if m != nil {
		return m.ChainRPCPort
	}
	return 0
}

func (m *Manager) GetRegionCode() string {
	if m != nil {
		return m.RegionCode
	}
	return ""
}

func (m *Manager) GetRegisterStatus() string {
	if m != nil {
		return m.RegisterStatus
	}
	return ""
}

func (m *Manager) GetWorkingStatus() string {
	if m != nil {
		return m.WorkingStatus
	}
	return ""
}

func (m *Manager) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Manager) GetCreateAt() uint64 {
	if m != nil {
		return m.CreateAt
	}
	return 0
}

func (m *Manager) GetUpdator() string {
	if m != nil {
		return m.Updator
	}
	return ""
}

func (m *Manager) GetUpdateAt() uint64 {
	if m != nil {
		return m.UpdateAt
	}
	return 0
}

func init() {
	proto.RegisterType((*Manager)(nil), "enreach.manager.Manager")
}

func init() { proto.RegisterFile("enreach/manager/manager.proto", fileDescriptor_fe2e849f6a07a0ae) }

var fileDescriptor_fe2e849f6a07a0ae = []byte{
	// 329 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x92, 0xcd, 0x4a, 0xf3, 0x40,
	0x14, 0x86, 0x3b, 0x5f, 0xfb, 0xf5, 0xe7, 0xf4, 0x0f, 0x66, 0xe3, 0x20, 0x38, 0x84, 0x22, 0x92,
	0x55, 0x45, 0xbc, 0x82, 0xd8, 0x95, 0x0b, 0xa1, 0xc4, 0x9d, 0xbb, 0x31, 0x19, 0xda, 0x52, 0xcc,
	0x84, 0x99, 0x29, 0xea, 0x5d, 0x78, 0x59, 0x2e, 0xbb, 0x74, 0x29, 0xcd, 0x8d, 0xc8, 0x9c, 0x4c,
	0x42, 0xd2, 0x55, 0xcf, 0xfb, 0xcc, 0xf3, 0x96, 0x70, 0x38, 0x70, 0x25, 0x33, 0x2d, 0x45, 0xb2,
	0xbd, 0x7d, 0x13, 0x99, 0xd8, 0x48, 0x5d, 0xfd, 0x2e, 0x73, 0xad, 0xac, 0xa2, 0x73, 0xff, 0xbc,
	0xf4, 0x78, 0x51, 0x74, 0x61, 0xf0, 0x54, 0xce, 0xf4, 0x06, 0x66, 0x1e, 0x47, 0x49, 0xa2, 0x0e,
	0x99, 0x65, 0x24, 0x20, 0xe1, 0x28, 0x3e, 0xa3, 0x34, 0x84, 0xb9, 0xca, 0xa5, 0x16, 0x56, 0xd5,
	0xe2, 0x3f, 0x14, 0xcf, 0x31, 0x0d, 0x60, 0xbc, 0x55, 0xc6, 0x46, 0x69, 0xaa, 0xa5, 0x31, 0xac,
	0x8b, 0x56, 0x13, 0x39, 0xc3, 0xff, 0xfb, 0x5a, 0x69, 0xcb, 0x7a, 0x01, 0x09, 0xa7, 0x71, 0x13,
	0x39, 0xc3, 0x6a, 0x91, 0xec, 0xbd, 0xf1, 0xbf, 0x34, 0x1a, 0x88, 0x2e, 0x60, 0x92, 0x6c, 0xc5,
	0x2e, 0x8b, 0xd6, 0x8f, 0xa8, 0xf4, 0x51, 0x69, 0xb1, 0xda, 0x89, 0xd7, 0x2b, 0x74, 0x06, 0x0d,
	0xc7, 0x33, 0xca, 0x01, 0xb4, 0xdc, 0xec, 0x54, 0xb6, 0x52, 0xa9, 0x64, 0x43, 0xfc, 0xd8, 0x06,
	0x71, 0xfb, 0x71, 0xc9, 0x58, 0xa9, 0x9f, 0xad, 0xb0, 0x07, 0xc3, 0x46, 0xe5, 0x7e, 0xda, 0x94,
	0x5e, 0xc3, 0xf4, 0x5d, 0xe9, 0xfd, 0x2e, 0xdb, 0x78, 0x0d, 0x50, 0x6b, 0x43, 0xca, 0x60, 0x90,
	0x68, 0xe9, 0xb6, 0xc5, 0xc6, 0xf8, 0x5e, 0x45, 0x7a, 0x09, 0x43, 0x1c, 0x65, 0x64, 0xd9, 0x24,
	0x20, 0x61, 0x2f, 0xae, 0xb3, 0x6b, 0x1d, 0xf2, 0x14, 0x5b, 0xd3, 0xb2, 0xe5, 0xa3, 0x6b, 0xe1,
	0xe8, 0x5a, 0xb3, 0xb2, 0x55, 0xe5, 0x87, 0xbb, 0xef, 0x13, 0x27, 0xc7, 0x13, 0x27, 0xbf, 0x27,
	0x4e, 0xbe, 0x0a, 0xde, 0x39, 0x16, 0xbc, 0xf3, 0x53, 0xf0, 0xce, 0xcb, 0x45, 0x75, 0x2f, 0x1f,
	0xf5, 0xc5, 0xd8, 0xcf, 0x5c, 0x9a, 0xd7, 0x3e, 0x1e, 0xcc, 0xfd, 0x5f, 0x00, 0x00, 0x00, 0xff,
	0xff, 0x86, 0xba, 0x06, 0xc2, 0x51, 0x02, 0x00, 0x00,
}

func (m *Manager) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Manager) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Manager) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.UpdateAt != 0 {
		i = encodeVarintManager(dAtA, i, uint64(m.UpdateAt))
		i--
		dAtA[i] = 0x70
	}
	if len(m.Updator) > 0 {
		i -= len(m.Updator)
		copy(dAtA[i:], m.Updator)
		i = encodeVarintManager(dAtA, i, uint64(len(m.Updator)))
		i--
		dAtA[i] = 0x6a
	}
	if m.CreateAt != 0 {
		i = encodeVarintManager(dAtA, i, uint64(m.CreateAt))
		i--
		dAtA[i] = 0x60
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintManager(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x5a
	}
	if len(m.WorkingStatus) > 0 {
		i -= len(m.WorkingStatus)
		copy(dAtA[i:], m.WorkingStatus)
		i = encodeVarintManager(dAtA, i, uint64(len(m.WorkingStatus)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.RegisterStatus) > 0 {
		i -= len(m.RegisterStatus)
		copy(dAtA[i:], m.RegisterStatus)
		i = encodeVarintManager(dAtA, i, uint64(len(m.RegisterStatus)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.RegionCode) > 0 {
		i -= len(m.RegionCode)
		copy(dAtA[i:], m.RegionCode)
		i = encodeVarintManager(dAtA, i, uint64(len(m.RegionCode)))
		i--
		dAtA[i] = 0x42
	}
	if m.ChainRPCPort != 0 {
		i = encodeVarintManager(dAtA, i, uint64(m.ChainRPCPort))
		i--
		dAtA[i] = 0x38
	}
	if m.ChainAPIPort != 0 {
		i = encodeVarintManager(dAtA, i, uint64(m.ChainAPIPort))
		i--
		dAtA[i] = 0x30
	}
	if m.TrackerPort != 0 {
		i = encodeVarintManager(dAtA, i, uint64(m.TrackerPort))
		i--
		dAtA[i] = 0x28
	}
	if m.ManagerPort != 0 {
		i = encodeVarintManager(dAtA, i, uint64(m.ManagerPort))
		i--
		dAtA[i] = 0x20
	}
	if len(m.HostAddress) > 0 {
		i -= len(m.HostAddress)
		copy(dAtA[i:], m.HostAddress)
		i = encodeVarintManager(dAtA, i, uint64(len(m.HostAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.OperatorAccount) > 0 {
		i -= len(m.OperatorAccount)
		copy(dAtA[i:], m.OperatorAccount)
		i = encodeVarintManager(dAtA, i, uint64(len(m.OperatorAccount)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.ManagerAccount) > 0 {
		i -= len(m.ManagerAccount)
		copy(dAtA[i:], m.ManagerAccount)
		i = encodeVarintManager(dAtA, i, uint64(len(m.ManagerAccount)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintManager(dAtA []byte, offset int, v uint64) int {
	offset -= sovManager(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Manager) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ManagerAccount)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	l = len(m.OperatorAccount)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	l = len(m.HostAddress)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	if m.ManagerPort != 0 {
		n += 1 + sovManager(uint64(m.ManagerPort))
	}
	if m.TrackerPort != 0 {
		n += 1 + sovManager(uint64(m.TrackerPort))
	}
	if m.ChainAPIPort != 0 {
		n += 1 + sovManager(uint64(m.ChainAPIPort))
	}
	if m.ChainRPCPort != 0 {
		n += 1 + sovManager(uint64(m.ChainRPCPort))
	}
	l = len(m.RegionCode)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	l = len(m.RegisterStatus)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	l = len(m.WorkingStatus)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	if m.CreateAt != 0 {
		n += 1 + sovManager(uint64(m.CreateAt))
	}
	l = len(m.Updator)
	if l > 0 {
		n += 1 + l + sovManager(uint64(l))
	}
	if m.UpdateAt != 0 {
		n += 1 + sovManager(uint64(m.UpdateAt))
	}
	return n
}

func sovManager(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozManager(x uint64) (n int) {
	return sovManager(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Manager) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowManager
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Manager: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Manager: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ManagerAccount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ManagerAccount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OperatorAccount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OperatorAccount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field HostAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.HostAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ManagerPort", wireType)
			}
			m.ManagerPort = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ManagerPort |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TrackerPort", wireType)
			}
			m.TrackerPort = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TrackerPort |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainAPIPort", wireType)
			}
			m.ChainAPIPort = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ChainAPIPort |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainRPCPort", wireType)
			}
			m.ChainRPCPort = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ChainRPCPort |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RegionCode", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RegionCode = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RegisterStatus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RegisterStatus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WorkingStatus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WorkingStatus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 12:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreateAt", wireType)
			}
			m.CreateAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreateAt |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Updator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthManager
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthManager
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Updator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 14:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field UpdateAt", wireType)
			}
			m.UpdateAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowManager
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.UpdateAt |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipManager(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthManager
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipManager(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowManager
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowManager
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowManager
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthManager
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupManager
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthManager
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthManager        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowManager          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupManager = fmt.Errorf("proto: unexpected end of group")
)
